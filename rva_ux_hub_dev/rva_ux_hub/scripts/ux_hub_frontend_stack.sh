#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR=/opt/rva/modulos/rva_ux_hub
COMPOSE_FILE=${ROOT_DIR}/containers/nextjs/compose.yaml

usage() {
  echo "uso: ux_hub_frontend_stack.sh {start|stop|restart|status|logs|validate}"
}

cmd=${1:-}
case ${cmd} in
  start)
    docker compose -f "${COMPOSE_FILE}" up -d --build
    ;;
  stop)
    docker compose -f "${COMPOSE_FILE}" down
    ;;
  restart)
    docker compose -f "${COMPOSE_FILE}" down
    docker compose -f "${COMPOSE_FILE}" up -d --build
    ;;
  status)
    docker compose -f "${COMPOSE_FILE}" ps
    ;;
  logs)
    docker compose -f "${COMPOSE_FILE}" logs --tail=200 -f
    ;;
  validate)
    test -f "${ROOT_DIR}/package.json"
    test -f "${ROOT_DIR}/app/page.tsx"
    test -f "${COMPOSE_FILE}"
    echo "rva_ux_hub: estrutura minima do frontend presente"
    ;;
  *)
    usage
    exit 1
    ;;
esac
