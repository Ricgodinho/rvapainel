import React from "react";

export const config = {
  components: {
    ButtonBlock: {
      label: "Botão",
      fields: {
        text: {
          type: "text",
          label: "Texto"
        },
        href: {
          type: "text",
          label: "Link"
        }
      },
      defaultProps: {
        text: "Clique aqui",
        href: "#"
      },
      render: ({ text, href }) => {
        return (
          <a
            href={href}
            style={{
              display: "inline-block",
              padding: "12px 18px",
              background: "#111",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "8px"
            }}
          >
            {text}
          </a>
        );
      }
    },

    CardBlock: {
      label: "Card",
      fields: {
        title: {
          type: "text",
          label: "Título"
        },
        description: {
          type: "textarea",
          label: "Descrição"
        }
      },
      defaultProps: {
        title: "Título do card",
        description: "Descrição do card"
      },
      render: ({ title, description }) => {
        return (
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "12px",
              padding: "16px",
              maxWidth: "320px"
            }}
          >
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        );
      }
    }
  }
};
