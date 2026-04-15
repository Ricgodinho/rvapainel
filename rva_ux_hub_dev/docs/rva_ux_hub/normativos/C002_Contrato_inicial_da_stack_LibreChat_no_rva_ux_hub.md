# C002 - Contrato inicial da stack LibreChat no rva_ux_hub

------------------------------------------------------------------
1. IDENTIFICACAO DO DOCUMENTO
------------------------------------------------------------------
Projeto: RVA - Assistente Virtual Pessoal
Escopo Documental: Modulo
Modulo Alvo: rva_ux_hub
Formato de Arquivo: Markdown (.md) UTF-8
Tipo de Documento: Normativo
Macroprocesso: P300
Microprocesso: C002
Titulo: C002 - Contrato inicial da stack LibreChat no rva_ux_hub
Status: Ativo
Data: 2026-04-11

## Objetivo
Definir o contrato inicial da stack do `LibreChat` implantada dentro do
modulo `rva_ux_hub`.

## Caminho oficial da stack

`/opt/rva/modulos/rva_ux_hub/containers/librechat`

## Componentes iniciais

- `api` do `LibreChat`
- `mongodb`
- `meilisearch`
- `vectordb`
- `rag_api`

## Regra operacional desta fase

- a stack pertence ao modulo `rva_ux_hub`
- a operacao inicial deve ocorrer pelo wrapper local do modulo
- a configuracao versionada deve ficar em:
  - `compose.yaml`
  - `.env.example`
  - `librechat.yaml`
- o `.env` real nao deve ser versionado

## Runtime de modelo desta fase

O runtime inicial desta fase deve usar `Ollama` como capacidade global do
RVA, fora do escopo de persistencia do modulo `rva_ux_hub`.

Modelo inicial previsto:

- `qwen2.5:7b`

## Localizacao governada do runtime de modelos

Container global:

- `/opt/rva/containers/ollama`

Volume persistente global:

- `/opt/rva/dados/volumes/ollama/data`

## Relacao com o registry de roteamento

A stack inicial deve respeitar o arquivo:

`/opt/rva/modulos/rva_ux_hub/config/module_routing_registry.yaml`

Nesta fase:

- `geral` aponta para modelo leve local
- `trade` nasce com o mesmo modelo base
- a especializacao futura deve ocorrer por evolucao de rotas, modelos e guias

## Resultado esperado
Permitir que o `rva_ux_hub` tenha uma base conversacional real e acessivel em
rede, sem acoplar prematuramente o modulo ao `GSOL`.
