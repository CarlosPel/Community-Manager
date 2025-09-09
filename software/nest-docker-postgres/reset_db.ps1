param (
    [SecureString]$Password,
    [string]$ScriptPath
)

docker exec -i comunidad_db $env:PGPASSWORD=[Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($Password)); psql -h localhost -U com_admin -d NeighComm29 -f $ScriptPath