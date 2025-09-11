# Ruta al ejecutable de Docker Desktop (ajústala si lo tienes en otro lugar)
$dockerDesktopPath = "C:\Program Files\Docker\Docker\Docker Desktop.exe"

# Iniciar Docker Desktop si no está corriendo
$dockerProcess = Get-Process "Docker Desktop" -ErrorAction SilentlyContinue
if (-not $dockerProcess) {
    Write-Host "Iniciando Docker Desktop..."
    Start-Process $dockerDesktopPath
}
else {
    Write-Host "Docker Desktop ya estaba corriendo"
}

# Esperar a que Docker esté listo
Write-Host "Esperando a que Docker arranque..."
$maxRetries = 40
$retries = 0
while ($retries -lt $maxRetries) {
    try {
        docker info > $null 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-Host "Docker está listo"
            break
        }
    }
    catch {
        # ignoramos el error
    }
    Start-Sleep -Seconds 3
    $retries++
}

if ($retries -eq $maxRetries) {
    Write-Host "Docker no arrancó a tiempo"
    exit 1
}

# Levantar la aplicación con docker-compose
Write-Host "Iniciando los contenedores..."
Set-Location .\software\nest-docker-postgres\
docker-compose up -d --build

$resetDb = Read-Host "¿Desea resetear la base de datos? (y/n)"
if ($resetDb -eq "y") {
    Write-Host "Reseteando la base de datos..."
    # Abrir una consola de PostgreSQL en el contenedor y ejecutar el script .sql
    $psswd = Read-Host "Contraseña:" -AsSecureString
    # $initPath = (Resolve-Path .\init.sql).Path

    $plainPassword = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($psswd))

    Get-Content .\init.sql | docker exec -i -e PGPASSWORD=$plainPassword comunidad_db psql -h localhost -U com_admin -d NeighComm29
}

# Entrar en el directorio de la aplicación React y arrancarla
Write-Host "Iniciando la aplicación React..."
Set-Location ..\react-app\
npm run dev

Write-Host "Sistema iniciado correctamente"