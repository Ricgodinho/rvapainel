# NORMATIVO DE IMPLEMENTAÇÃO — MÓDULO `rva_eng_web_dev`

## 1. Identificação do módulo

**Nome em laboratório:** `rva_eng_web_dev`  
**Nome oficial futuro:** `rva_eng_web`

Este módulo está em fase de laboratório controlado dentro do ambiente `RVA Consultant`, atualmente sob o caminho:

`/opt/container_dev/rva_eng_web_dev`

A permanência do sufixo `_dev` é exclusiva do ambiente de desenvolvimento. Em promoção ao projeto principal, o módulo deverá seguir a nomenclatura oficial definida para o ecossistema RVA.

---

## 2. Finalidade do módulo

O módulo `rva_eng_web_dev` tem como finalidade atuar como **assistente de criação de sites**, com proposta semelhante a um construtor visual de páginas, inicialmente com escopo reduzido e controlado.

Seu alvo funcional nesta fase é:

- oferecer ambiente amigável para criação de sites;
- permitir uso de componentes reutilizáveis em formato de template;
- traduzir a intenção estrutural de criação em composição visual de páginas;
- apoiar codificação de forma organizada e moderna;
- operar como base técnica de evolução futura dentro do ecossistema RVA.

---

## 3. Função principal da fase atual

Na fase atual, a função principal oficial do módulo é:

**Construtor/editor visual de páginas e componentes.**

Outras interpretações possíveis do módulo não devem sobrepor esta definição nesta etapa.

---

## 4. Escopo obrigatório da fase atual

O MVP mínimo do módulo deverá permitir:

1. criar página;
2. adicionar blocos/componentes;
3. editar textos;
4. salvar estrutura da página;
5. renderizar página publicada.

### Exclusão explícita desta fase

Fica fora do escopo obrigatório atual:

- edição de links como funcionalidade prioritária;
- autenticação forte;
- persistência definitiva em banco de produção;
- gráficos avançados;
- tabelas avançadas;
- integração com serviços externos;
- sobreposição funcional a outros módulos do RVA;
- responsabilidade de painel global de administração.

---

## 5. Limite de atuação do módulo

Este módulo é **independente** e não deverá, nesta fase:

- substituir funcionalidades do projeto global;
- sobrepor responsabilidades de outros módulos;
- assumir papel de painel administrativo geral;
- absorver atribuições do módulo `rva_painel_dev`.

O relacionamento com outros módulos será definido posteriormente, respeitando a governança do `RVA Consultant`.

---

## 6. Componentes mínimos obrigatórios do MVP

Os componentes-template mínimos obrigatórios da fase atual ficam definidos como:

1. `Button`
2. `Card`
3. `Title`
4. `Text`
5. `Section`
6. `Grid`
7. `Hero`
8. `Image`

Nenhuma expansão de biblioteca de componentes deverá ocorrer sem revisão de escopo.

---

## 7. Modelo de tradução estrutural

Nesta fase, o módulo poderá operar como tradutor de intenção para:

- estrutura visual de página;
- composição por componentes configuráveis.

Não está normativamente assumido, nesta etapa, que o módulo será um tradutor amplo e irrestrito de solicitações para código complexo.

---

## 8. Stack oficial da fase 1

### Stack de aplicação aprovada

- **Next.js**
- **React**
- **Tailwind CSS**
- **shadcn/ui**

### Itens excluídos da fase atual

- **Supabase**
- **TanStack Table**
- **ECharts**

Esses itens poderão ser reavaliados em fase posterior, mediante necessidade real e novo alinhamento.

### Infraestrutura operacional

A infraestrutura de execução do módulo não é tratada como stack funcional do módulo. O ambiente já deverá operar dentro do contexto do `RVA Consultant`, com uso do mecanismo de execução já existente no host e do wrapper global aplicável.

---

## 9. Regra de operação offline

O módulo deverá operar com a seguinte diretriz:

> O módulo deve operar offline em runtime dentro do ambiente `RVA Consultant`, sem dependências externas obrigatórias durante a execução.

Essa diretriz significa:

- execução local/controlada;
- ausência de dependência cloud obrigatória em runtime;
- dependências devem estar empacotadas ou controladas no ambiente de laboratório.

---

## 10. Persistência e dados

### Regra atual de persistência

Nesta fase de desenvolvimento, é permitido utilizar persistência provisória em arquivo para:

- layout/página em JSON;
- templates locais;
- configurações temporárias do módulo.

### Regra estrutural

A persistência atual é **temporária** e deverá ser considerada já preparada para futura adequação ao modelo **DB-first**, respeitando a normativa global do projeto.

### Diretório operacional

O diretório `data/` é classificado como:

- operacional;
- transitório;
- não versionável.

### Regra futura

A persistência em arquivo deverá ser substituída, em momento apropriado, pelo modelo oficial definido na normativa global do RVA.

---

## 11. Restrições de armazenamento

Fica proibido armazenar neste módulo, nesta fase:

- credenciais reais;
- tokens;
- segredos;
- dados pessoais reais de clientes;
- dumps operacionais permanentes;
- logs sensíveis;
- arquivos de produção fora do padrão global.

Na ausência de definição explícita, prevalece a regra mais restritiva compatível com a governança global do projeto.

---

## 12. Governança aplicável

Este módulo, mesmo em laboratório, deverá seguir:

- todas as regras globais do projeto RVA que já sejam aplicáveis nesta fase;
- a estrutura definida na normativa global;
- o wrapper global de operação de containers/módulos;
- a separação entre desenvolvimento, persistência operacional e promoção futura.

### Exceção temporária reconhecida

A única flexibilização explicitamente admitida nesta fase é:

- manutenção provisória de persistência em arquivo antes da adoção integral do modelo DB-first.

---

## 13. Operação do módulo

A operação do módulo deverá respeitar o mecanismo global já existente de controle operacional.

### Regra obrigatória

O wrapper global existente será o mecanismo oficial de operação do módulo nesta fase.

### Consequência prática

O módulo não deverá criar, por padrão, um fluxo operacional paralelo que contradiga a camada global já definida.

---

## 14. Porta e exposição

A porta operacional definitiva do módulo ainda depende de validação na normativa global.

Até essa definição, aplica-se a regra:

> A porta operacional do módulo será herdada da definição global do RVA e, até essa definição, poderá usar porta provisória de laboratório.

---

## 15. Segurança da fase atual

Nesta fase de laboratório:

- o editor pode permanecer sem autenticação forte;
- o módulo deve permanecer restrito ao ambiente controlado de desenvolvimento;
- segurança avançada será tratada em fase posterior;
- essa flexibilização não autoriza exposição irresponsável fora do ambiente controlado.

---

## 16. Usuários previstos

Os perfis de uso previstos para evolução do módulo são:

- administrador principal;
- usuários técnicos;
- consumidores do produto em fases futuras.

Entretanto, nesta fase, o uso efetivo principal permanece sob administração do responsável pelo projeto.

---

## 17. Critério mínimo de prontidão

O módulo será considerado **minimamente operacional** quando permitir:

- criar;
- editar;
- salvar;
- renderizar;

um site simples por meio de componentes reutilizáveis.

### Entrega mínima esperada antes de promoção

Antes de qualquer promoção ao projeto principal, o módulo deverá demonstrar:

- painel/área de interação tipo builder em nível simples;
- capacidade funcional de montar site simples;
- fluxo mínimo estável com componentes reutilizáveis;
- coerência com a governança global aplicável.

---

## 18. Regra de promoção ao projeto principal

O módulo `rva_eng_web_dev` não deverá ser incorporado automaticamente ao projeto principal por simples existência ou por funcionamento parcial.

A promoção para `rva_eng_web` deverá ocorrer apenas quando houver:

- alinhamento técnico;
- alinhamento normativo;
- aderência à governança global;
- estabilidade mínima operacional;
- decisão explícita de promoção.

---

## 19. Pendências abertas para revisões futuras

Permanecem como pontos pendentes para fases posteriores:

1. definição da porta oficial global;
2. integração com banco conforme normativa global;
3. política de segurança e autenticação;
4. política de usuários e perfis;
5. relação formal com `rva_painel_dev`;
6. critérios de integração futura com o projeto principal RVA;
7. expansão controlada da biblioteca de componentes;
8. discussão posterior sobre prioridades entre módulos.

---

## 20. Situação documental

Este documento registra o **alinhamento normativo inicial de implementação** do módulo `rva_eng_web_dev` em fase de laboratório.

Ele deverá servir como referência para:

- desenvolvimento controlado;
- decisões de escopo;
- revisão de aderência;
- preparação de futura promoção ao projeto principal.

