import Hero from "@/components/custom_ui/hero/hero";
import React from "react";

import img from "@/assets/returns.png";
import Footer from "@/components/custom_ui/layout/footer/footer";

const Policy = () => {
  return (
    <main className="md:to-[20%]nbb flex min-h-svh flex-col items-center gap-y-10 bg-gradient-to-t from-neutral-800 to-transparent to-[20%] text-secondary">
      <Hero
        img={img}
        desc={
          <div className="space-y-5">
            <h1>RETURNS & REFUNDS</h1>
            <p>
              Sova is glad to accept returns of online-purchased products that
              are undamaged, unworn, and/or defective{" "}
              <strong>* within 30 days *</strong> of the original purchase date.
              If you&apos;re not happy with your purchase, we can simply set you
              up with a refund or an exchange. To request a return or exchange,
              just get in touch with us within 30 days of receiving the item.
            </p>
          </div>
        }
      />
      <div className="items-center-center flex w-[85%] flex-col gap-y-10 md:w-[60%]">
        <div className="space-y-1.5">
          <h5 className="text-nowrap font-bold">Return/Exchange Conditions:</h5>
          <ol className="list-inside list-decimal">
            <li>
              Returns of items must be made within 30 days following the
              delivery date.
            </li>
            <li>
              The items need to be in their original tags, unwashed, and unworn.
            </li>
            <li>
              Final sale and clearance items are neither returnable nor
              exchangeable.
            </li>
            <li> Free gifts cannot be returned or refunded.</li>
          </ol>
        </div>
        <div className="">
          <h5 className="text-nowrap font-bold">HOW TO RETURN:</h5>
          <ol className="list-inside list-decimal">
            <li>
              Contact Customer Service with order information and a brief
              description of your reason, indicate if you would like a refund or
              would prefer an exchange. When requesting an exchange, please
              provide the style, size and color of the new item you wish to
              receive.
            </li>
            <li> We will review your request and get back to you asap.</li>
            <li>
              If your return request is approved, please be sure to indicate
              your name, address, order number and reason for the return on a
              separate piece of paper. Then put the paper inside your package
              along with the item(s) you are going to return and pack the item
              properly.
            </li>
            <li>
              {" "}
              Send item(s) back to us through local post office. If you are in
              urgent need of handling the returned parcels, please contact our
              customer service and provide a tracking number for the returned
              parcels.
            </li>
            <li>
              We will process your return within 5 business days after we
              receive your parcel.
            </li>
          </ol>
        </div>
        <div className="space-y-1.5">
          <h5 className="text-nowrap font-bold">Note:</h5>
          <ul className="list-inside list-disc font-semibold">
            <li>
              Please contact us if you want to return an item. Return without
              prior discussion and authorization will not be accepted.
            </li>
            <li>
              Please do not send your return to the address on your package or
              the office address on the website. That is not our return address
              and will affect the processing of your return. The return address
              will be provided to you by mail after submitting the application.
            </li>
            <li>
              Please be sure to double-check your returns before. We are not
              responsible for the return of non-Edenmen products.
            </li>
            <li>
              We are not responsible for shipping costs that may incur regarding
              the return of a product.
            </li>
            <li>
              We reserve the right not to accept any return/exchange if the
              product shows signs of wear or has been used or altered from its
              original condition.
            </li>
          </ul>
        </div>
        <div className="space-y-1.5">
          <h5 className="text-nowrap font-bold">REFUND:</h5>
          <p>
            In case of a return, your refund will be credited to the original
            payment method. Shipping costs will not be refunded by Edenmen in
            case of returns. Once your package reaches us, please allow 5
            business days (depending on peak times) for your return to be
            processed. If your return does not meet the conditions listed, the
            package will be sent back to you at your own expense. When your
            return has been accepted, your refund will be issued and you will
            receive a confirmation email. If the refund is applied to your
            credit card, your credit card company may take up to 10 additional
            business days to post the refund to your account. If more than 10
            business days have passed since we&apos;ve approved your return,
            please contact us through our online form.
          </p>
        </div>
        <div className="space-y-1.5">
          <h5 className="text-nowrap font-bold">ITEM NOT RECEIVED:</h5>
          <ol className="list-inside list-decimal">
            <li>
              If your package is still lost or missing, you must contact us
              within 10 days of the expected delivery date of your order to file
              a claim. Please be sure you check with neighbors, roommates,
              family members or anyone else who may have been home at the time
              the package was delivered.
            </li>
            <li>
              Edenmen does not hold or accept responsibility for packages that
              have been reported as delivered by the carrier. We do not issue
              refunds or credits for packages that the carrier confirms as being
              delivered.
            </li>
          </ol>
        </div>
        <div className="space-y-1.5">
          <h5 className="text-nowrap font-bold">EXCHANGE:</h5>
          <ol className="list-inside list-decimal">
            <li>
              After returning the original products to us, you can contact us to
              make a separate purchase for the new item. This ensures you get
              the item you want, as well as credit for any discounts used.
            </li>
            <li>
              As soon as we receive your returned item, we refund the purchase
              amount to the original method of payment, such as the credit card
              used for the order.
            </li>
          </ol>
        </div>
        <div className="space-y-1.5">
          <h5 className="text-nowrap font-bold">ORDER CANCELATION:</h5>
          <p>
            Your order will be fully refunded if it’s canceled within 24 hours
            of purchase. Please submit a help ticket from Contact Us if you
            decide to cancel the order. For orders canceled after 24 hours of
            purchase but before shipment, a 15% cancellation fee is applied to
            cover warehouse processing expenses. We will NOT accept order
            cancellation request if the orders have already been shipped.
          </p>
        </div>
        <div className="space-y-1.5">
          <h5 className="text-nowrap font-bold">CONTACT US:</h5>
          <p>
            If you have any other doubts or difficulties during the return
            process, please feel free to contact us through our online form, we
            will be always online and welcome your consultation.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
};

export default Policy;
