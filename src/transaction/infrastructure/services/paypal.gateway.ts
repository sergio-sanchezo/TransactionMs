import axios from "axios";
import { config } from "../../../config";

export class PaypalGateway {
  public async makePayment(amount: number, currency: string): Promise<any> {
    const order = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: currency,
            value: amount,
          },
        },
      ],
      application_context: {
        brand_name: "UnCoin",
        landing_page: "NO_PREFERENCE",
        user_action: "PAY_NOW",
        return_url: `http://localhost:4000/transaction/capture-order`,
        cancel_url: `http://localhost:4000/transaction/cancel-order`,
      },
    };

    // format the body
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");

    // Generate an access token
    const {
      data: { access_token },
    } = await axios.post(
      "https://api-m.sandbox.paypal.com/v1/oauth2/token",
      params,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        auth: {
          username: config.paypal.clientId,
          password: config.paypal.clientSecret,
        },
      }
    );

    // Create an order
    const response = await axios.post(
      "https://api-m.sandbox.paypal.com/v2/checkout/orders",
      order,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    return response.data;
  }

  public async captureOrder(token: string): Promise<any> {
    try {
      const response = await axios.post(
        `https://api-m.sandbox.paypal.com/v2/checkout/orders/${token}/capture`,
        {},
        {
          auth: {
            username: config.paypal.clientId,
            password: config.paypal.clientSecret,
          },
        }
      );

      console.log(response.data);

      return response.data;
    } catch (error) {}
  }
}
