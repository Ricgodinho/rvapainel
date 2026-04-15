# N001 - Normativo inicial do modulo rva_ux_hub

------------------------------------------------------------------
1. IDENTIFICACAO DO DOCUMENTO
------------------------------------------------------------------
Projeto: RVA - Assistente Virtual Pessoal
Escopo Documental: Modulo
Modulo Alvo: rva_ux_hub
Formato de Arquivo: Markdown (.md) UTF-8
Tipo de Documento: Normativo
Macroprocesso: P300
Microprocesso: N001
Titulo: N001 - Normativo inicial do modulo rva_ux_hub
Status: Ativo
Data: 2026-04-11

## Objetivo
Oficializar o nascimento do modulo `rva_ux_hub` como camada inicial de
experiencia de uso do RVA, preparada para conversa geral, roteamento manual
de modulos e futura expansao para paineis especializados.

## Identidade do modulo
O `rva_ux_hub` e o modulo responsavel pela experiencia inicial de interacao
do usuario com o ecossistema RVA.

Seu papel nesta fase nao e substituir o `RVA Core` nem o `GSOL`.
Seu papel e publicar uma camada inicial de uso capaz de:

- expor a guia principal de interacao
- ler um registry oficial de roteamento
- apresentar rotas ativas por selecao manual
- preparar guias especializadas por modulo
- expor um `help` operacional para manutencao do roteamento

## Principios obrigatorios

- o modulo deve obedecer integralmente as normas globais do RVA
- a lista de rotas da guia principal nao deve ficar hardcoded na interface
- o registry de roteamento e a fonte oficial das rotas exibidas
- `help` e uma funcao da interface, nao um modulo especialista
- `GSOL` continua fora de escopo nesta fase inicial
- a guia `trade` pode nascer estruturalmente antes de ficar populada
- a inclusao de novos modulos deve ocorrer por contrato no registry oficial

## Limites iniciais

Nesta fase, o modulo nao cobre:

- orquestracao completa do `GSOL`
- aprendizado autonomo de roteamento
- painel operacional completo
- automacao final de voz
- definicao definitiva da UX futura

## Resultado esperado deste normativo
Estabelecer a existencia oficial do `rva_ux_hub` como modulo do ecossistema
RVA e fixar sua funcao inicial antes e da evolucao futura do UX.
