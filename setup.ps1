# Script de configuração para o projeto
Write-Host "Iniciando configuração do projeto..." -ForegroundColor Cyan

# Verificar se o MySQL está rodando
try {
    Write-Host "Verificando conexão com o MySQL..." -ForegroundColor Yellow
    $null = mysql --host=localhost --user=root -e "SELECT 1" 2>&1
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERRO: MySQL não está acessível. Verifique se o serviço está rodando." -ForegroundColor Red
        Write-Host "Certifique-se que o MySQL está instalado e rodando na porta 3306." -ForegroundColor Red
        exit 1
    }
    Write-Host "MySQL está rodando corretamente." -ForegroundColor Green
} catch {
    Write-Host "ERRO: Não foi possível verificar o MySQL. Verifique se o MySQL está instalado." -ForegroundColor Red
    exit 1
}

# Criar o banco de dados se não existir
Write-Host "Criando banco de dados auth_db se não existir..." -ForegroundColor Yellow
mysql --host=localhost --user=root -e "CREATE DATABASE IF NOT EXISTS auth_db;"
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERRO: Não foi possível criar o banco de dados." -ForegroundColor Red
    exit 1
}
Write-Host "Banco de dados auth_db configurado com sucesso." -ForegroundColor Green

# Instalar dependências
Write-Host "Instalando dependências do projeto..." -ForegroundColor Yellow
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERRO: Falha ao instalar dependências." -ForegroundColor Red
    exit 1
}
Write-Host "Dependências instaladas com sucesso." -ForegroundColor Green

# Gerar cliente Prisma
Write-Host "Gerando cliente Prisma..." -ForegroundColor Yellow
Set-Location -Path "packages/database"
npx prisma generate
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERRO: Falha ao gerar cliente Prisma." -ForegroundColor Red
    exit 1
}
Write-Host "Cliente Prisma gerado com sucesso." -ForegroundColor Green

# Executar migrações
Write-Host "Executando migrações do banco de dados..." -ForegroundColor Yellow
npx prisma migrate dev --name init
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERRO: Falha ao executar migrações." -ForegroundColor Red
    exit 1
}
Write-Host "Migrações executadas com sucesso." -ForegroundColor Green

Set-Location -Path "../.."

Write-Host "Configuração concluída com sucesso!" -ForegroundColor Cyan
Write-Host "Para iniciar a API, execute: npm run dev:api" -ForegroundColor Green
