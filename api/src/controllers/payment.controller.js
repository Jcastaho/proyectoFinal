import mercadopage from "mercadopago";

export const createOrder = async (req, res) => {
  const {producto} = req.body; 
  mercadopage.configure({
    access_token: "TEST-6994329170290491-111312-6e5c408fd8e295ab7502cf012f5d70cb-1548001278",
  });

  const result = await mercadopage.preferences.create({
    items: [
      {
        title: producto.title,
        unit_price: producto.price,
        currency_id: "COP",
        quantity: 1,
      },
    ]    
  });

  console.log(result);
  res.send(result)
};

export const receiveWebhook = async (req, res) => {
  const payment = req.query;
  try {
    if (payment.type === "payment") {
      const data = await mercadopage.payment.findById(payment["data.id"]);
      console.log(data);
    }

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).json({ error: error.message  });
  }
};
