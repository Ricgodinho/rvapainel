# RVA - Modulo rva_ux_hub

Esta pasta concentra a documentacao oficial de implementacao do modulo
`rva_ux_hub`.

## Estrutura inicial

- `README.md` - indice do modulo
- `normativos/` - normas oficiais do modulo
- `planos/` - roadmap e planejamento oficial
- `registros/` - materializacao e validacoes do modulo

## Bootstrap oficial promovido

Documentos fundacionais promovidos na fase inicial:

- `N001_Normativo_inicial_do_modulo_rva_ux_hub.md`
- `E001_Escopo_inicial_do_modulo_rva_ux_hub.md`
- `C001_Contrato_inicial_do_registry_de_roteamento_do_modulo_rva_ux_hub.md`
- `C002_Contrato_inicial_da_stack_LibreChat_no_rva_ux_hub.md`
- `R001_Roadmap_inicial_do_modulo_rva_ux_hub.md`
- `M300.001_Registrar_bootstrap_inicial_do_modulo_rva_ux_hub.md`
- `M300.002_Registrar_implantacao_inicial_da_stack_LibreChat_no_rva_ux_hub.md`

## Direcao desta fase

Nesta primeira fase, o modulo nasce para:

- sustentar a guia principal do UX
- ler um arquivo oficial de roteamento de modulos
- expor `geral` e os modulos ativos definidos nesse arquivo
- expor um `help` de manutencao da interface
- preparar a guia `trade` como estrutura inicial

## Material de apoio relacionado

O bootstrap do modulo usa como apoio principal:

- `/opt/rva/documents/support/windows_apoio_inicial/global/normativos/M025.05_Definir_arquitetura_de_core_e_subnucleos_especializados_do_RVA.md`
- `/opt/rva/documents/support/windows_apoio_inicial/global/normativos/M025.10_Definir_contrato_operacional_entre_o_RVA_Core_e_os_subnucleos_especializados.md`
- `/opt/rva/documents/support/windows_apoio_inicial/global/normativos/M025.71_Definir_padroes_de_perfil_tipo_modelo_no_GSOL.md`
- `/opt/rva/documents/support/windows_apoio_inicial/global/normativos/M025.72_Definir_contrato_de_user_hint_e_override_manual_no_GSOL.md`

Regra desta fase:
-Durante a fase de laboratório controlado, o uso de .env local permanece tolerado como exceção transitória. Na promoção ao RVA principal, o módulo deverá absorver integralmente a normativa global de segredos e variáveis de ambiente.
- o modulo aproveita apenas o necessario para roteamento inicial
- `GSOL` completo continua fora de escopo nesta etapa
