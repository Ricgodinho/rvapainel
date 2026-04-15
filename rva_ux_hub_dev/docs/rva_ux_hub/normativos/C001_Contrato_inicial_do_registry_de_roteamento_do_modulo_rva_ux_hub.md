# C001 - Contrato inicial do registry de roteamento do modulo rva_ux_hub

------------------------------------------------------------------
1. IDENTIFICACAO DO DOCUMENTO
------------------------------------------------------------------
Projeto: RVA - Assistente Virtual Pessoal
Escopo Documental: Modulo
Modulo Alvo: rva_ux_hub
Formato de Arquivo: Markdown (.md) UTF-8
Tipo de Documento: Normativo
Macroprocesso: P300
Microprocesso: C001
Titulo: C001 - Contrato inicial do registry de roteamento do modulo rva_ux_hub
Status: Ativo
Data: 2026-04-11

## Objetivo
Definir o contrato inicial do arquivo oficial de roteamento lido pela guia
principal do `rva_ux_hub`.

## Caminho oficial

O arquivo oficial desta fase deve viver em:

`/opt/rva/modulos/rva_ux_hub/config/module_routing_registry.yaml`

## Regra central

A guia principal deve buscar a lista de rotas exclusivamente neste arquivo.

Regras obrigatorias:

- a interface nao deve hardcode as rotas
- apenas rotas `enabled: true` devem ser exibidas na selecao principal
- a acao `help` deve existir sempre, mas nao deve ser modelada como rota de
  modulo
- o `help` deve exibir o caminho oficial do arquivo de roteamento para
  manutencao

## Blocos minimos do arquivo

O arquivo deve conter, no minimo:

- cabecalho de versao e owner
- bloco `help`
- bloco `routes`

## Estrutura minima por rota

Cada rota deve conter, no minimo:

- `route_key`
- `display_name`
- `description`
- `route_mode`
- `target_module`
- `model_profile`
- `model_id`
- `enabled`
- `sort_order`

## Estrutura minima do bloco `help`

O bloco `help` deve conter, no minimo:

- `title`
- `description`
- `maintenance_path`

Regra:

- a interface deve abrir este conteudo como explicacao de manutencao
- o caminho deve apontar para o arquivo oficial editavel

## Semantica dos campos

- `route_key`: identificador estavel da rota
- `display_name`: nome amigavel exibido ao usuario
- `description`: descricao curta do papel da rota
- `route_mode`: tipo da rota nesta fase
- `target_module`: modulo ou owner funcional da rota
- `model_profile`: perfil de uso esperado pelo roteamento
- `model_id`: modelo inicial previsto para a rota
- `enabled`: indica se a rota deve aparecer na interface
- `sort_order`: ordem de exibicao

## Valores iniciais de `route_mode`

- `general`
- `module`

## Regra especial para `geral`

A rota `geral` nao representa um modulo especialista.

Nesta fase:

- `geral` deve existir como rota publica
- `geral` deve usar `route_mode: general`
- `geral` pode apontar para o owner funcional `rva_ux_hub`

## Rotas futuras

Rotas futuras podem ser adicionadas ao mesmo arquivo, por exemplo:

- `financeiro`
- `programming`
- `marketing`

Condicao obrigatoria:

- a rota futura so deve ser ativada quando houver coerencia documental e
  operacional do modulo correspondente

## Resultado esperado
Garantir que a guia principal do `rva_ux_hub` tenha uma fonte oficial, unica,
editavel e governada para publicacao das rotas desta fase.
