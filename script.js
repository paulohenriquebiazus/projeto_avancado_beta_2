const cardapio_loja = [
    { id: "Carne", pastel: " Pastel de Carne - R$3,99 ", preco: 3.99                  },
    { id: "Frango", pastel: " Pastel de Frango - R$3,99 ", preco: 3.99                },
    { id: "Chocolate", pastel: " Pastel de Chocolate - R$6,99 ", preco: 6.99          },
    { id: "ChocolateMorango", pastel: " Pastel de Chocolate com Morango - R$6,99 ", preco: 6.99   },
    { id: "Queijo", pastel: " Pastel de Queijo - R$3,99 ", preco: 3.99                },
    { id: "CarneQueijo", pastel: " Pastel de Carne com Queijo - R$3,99 ", preco: 3.99 },
    { id: "Cheddar", pastel: " Pastel de Carne com Cheddar - R$6,99 ", preco: 6.99    },
    { id: "Cheddar", pastel: " Pastel de Frango com Catupiri - R$6,99 ", preco: 6.99    }
];

const cardapio_loja_2 = [
    { id: "Carne", pastel: " Pastel de Carne - R$3,99 ", preco: 3.99                  },
    { id: "Frango", pastel: " Pastel de Frango - R$3,99 ", preco: 3.99                },
    { id: "Chocolate", pastel: " Pastel de Chocolate - R$6,99 ", preco: 6.99          },
    { id: "ChocolateMorango", pastel: " Pastel de Chocolate com Morango - R$6,99 ", preco: 6.99   },
    { id: "Queijo", pastel: " Pastel de Queijo - R$3,99 ", preco: 3.99                },
    { id: "CarneQueijo", pastel: " Pastel de Carne com Queijo - R$3,99 ", preco: 3.99 },
    { id: "Cheddar", pastel: " Pastel de Carne com Cheddar - R$6,99 ", preco: 6.99    },
    { id: "Cheddar", pastel: " Pastel de Frango com Catupiri - R$6,99 ", preco: 6.99    }
];

const tamanho_loja = [
    { id: "Pequeno", tamanho: " Pequeno ", preco: 2.50 },
    { id: "Médio", tamanho: " Médio ", preco: 5.00     },
    { id: "Grande", tamanho: " Grande ", preco: 10.00  },
    { id: "Gigante", tamanho: " Gigante ", preco: 12.00  }
];

const entrega_loja = [
    { id: "Entrega", tipo: "Entrega - R$ 5.00", preco: 5.00  },
    { id: "Buscar", tipo: "Busca", preco: 0.00     }
];

const acompanhante_loja = [
    { id: "Caldo de Cana", acompanhante: "Caldo de Cana - R$ 5.00 ", preco: 5.00},
    { id: "Suco Natural", acompanhante: "Suco Natural - R$ 3.00 ", preco: 3.00  },
    { id: "Refrigerante", acompanhante: "Refrigerante - R$ 7.00 ", preco: 7.00  }
];

function preencher(){
    const selectCardapio = document.getElementById("cardapio");
     for (let i = 0; i < cardapio_loja.length; i++) {
         const item = cardapio_loja[i];
         const option = document.createElement("option");
         option.value = item.id;
         option.textContent = item.pastel;
         selectCardapio.appendChild(option);
    }

    const selectCardapioww = document.getElementById("cardapioww");
     for (let i = 0; i < cardapio_loja_2.length; i++) {
         const item = cardapio_loja_2[i];
         const option = document.createElement("option");
         option.value = item.id;
         option.textContent = item.pastel;
         selectCardapioww.appendChild(option);
    } 

    const selectAcompanhante = document.getElementById("acompanhantee");
     for (let i = 0; i < acompanhante_loja.length; i++) {
         const item = acompanhante_loja[i];
         const option = document.createElement("option");
         option.value = item.id;
         option.textContent = item.acompanhante;
         selectAcompanhante.appendChild(option);
    }


    const selectTamanho = document.getElementById("tamanho");
     for (let i = 0; i < tamanho_loja.length; i++) {
         const item = tamanho_loja[i];
         const option = document.createElement("option");
         option.value = item.id;
         option.textContent = item.tamanho.trim();
         selectTamanho.appendChild(option);
    }
    const selectEntrega = document.getElementById("entrega");
     for (let i = 0; i < entrega_loja.length; i ++) {
         const item = entrega_loja[i];
         const option = document.createElement("option");
         option.value = item.id;
         option.textContent = item.tipo.trim();
         selectEntrega.appendChild(option);
     }
}
preencher();

function procurarPorId(lista, idProcurado) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === idProcurado) {
            return lista[i];
        }
    }
    return null;
}

function gerarRelatorio() {
    const PagamentoId = document.querySelector('input[name="pagamento"]:checked')?.value || "Indefinido...";
    const nomeId = document.getElementById("nome").value;   
    const cpfId = document.getElementById("cpf").value;
    const enderecoId = document.getElementById("endereco").value;
    const cardapioId = document.getElementById("cardapio").value;
    const cardapioId_2 = document.getElementById("cardapioww").value;
    const tamanhoId = document.getElementById("tamanho").value;
    const entregaId = document.getElementById("entrega").value;
    const acompanhanteId = document.getElementById("acompanhantee").value;

    const qtdCardapio = parseInt(document.getElementById("qtdCardapio").value) || 0;
    const qtdCardapio2 = parseInt(document.getElementById("qtdCardapio2").value) || 0;
    const qtdAcompanhante = parseInt(document.getElementById("qtdAcompanhante").value) || 0;

    var cardapioo = procurarPorId(cardapio_loja, cardapioId);
    var cardapioww = procurarPorId(cardapio_loja_2, cardapioId_2);
    var tamanhoo = procurarPorId(tamanho_loja, tamanhoId);
    var entregaa = procurarPorId(entrega_loja, entregaId);
    var acompanhantee = procurarPorId(acompanhante_loja, acompanhanteId);

    const total = (cardapioo.preco * qtdCardapio) + 
                  (cardapioww.preco * qtdCardapio2) + 
                  (acompanhantee.preco * qtdAcompanhante) +
                  tamanhoo.preco +  
                  entregaa.preco;

    const relatorioHTML =`
       <h2>Relatório do Pedido</h2>
       <p><strong>Comprador: </strong> ${nomeId} </p>
       <p><strong>CPF: </strong> ${cpfId} </p>
       <p><strong>Endereço: </strong> ${enderecoId} </p>
       <p><strong>Pastel: </strong> ${cardapioId} x${qtdCardapio} = R$ ${(cardapioo.preco * qtdCardapio).toFixed(2)}  </p>
       <p><strong>Outro Pastel: </strong> ${cardapioId_2} x${qtdCardapio2} = R$ ${(cardapioww.preco * qtdCardapio2).toFixed(2)}  </p>
       <p><strong>Acompanhamento: </strong> ${acompanhanteId} x${qtdAcompanhante} = R$ ${(acompanhantee.preco * qtdAcompanhante).toFixed(2)}  </p>
       <p><strong>Tamanho: </strong> ${tamanhoId} = R$ ${tamanhoo.preco.toFixed(2)} </p>
       <p><strong>Modo de Recebimento: </strong> ${entregaId} = R$ ${entregaa.preco.toFixed(2)} </p>
       <p><strong>Preço Total: </strong> R$ ${total.toFixed(2)} </p>
       <p><strong>Modo de Pagamento: </strong> ${PagamentoId}</p>
       <p>Obrigado por usar o relatório da Lá Casa de Pastel!</p>
    `;

    document.getElementById("relatorio").innerHTML = relatorioHTML;
}