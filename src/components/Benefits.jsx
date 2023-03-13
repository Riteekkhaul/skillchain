import React from "react";

const Benefits = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl text-center py-8">
    Benefits
    </h2>
      <div className="flex flex-wrap w-3/4 m-auto">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
               For Issuers
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
              For Verifiers
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                 <h3 className="font-bold text-2xl text-center">Save time and money with automation</h3>
                  <p className="px-20 py-4">
                  Certi makes it easy to issue certificates by automating the entire process. It helps you to keep track 
                  of all issued certificates, easily make corrections to issued certificates, resend certificates to recipients and more.
                  </p>
                  <ul className="list-disc pl-8">
                    <li>Bring your own custom design or use a built-in template design to get going in minutes.</li>
                    <li>Import recipients in bulk and issue certificates with just a few clicks. </li>
                    <li>Leverage Blockchain technology to ensure traceability, credibility and authenticity of the certificates. </li>
                    <li>Revoke any certificate at any given stage. </li>
                  </ul>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <h3 className="font-bold text-2xl text-center">One step verification process makes life easy</h3>
                  <p className="px-20 py-4">
                  Verifying any certificate is quick and painless with a single click. All you need is the certificate id, OR its QR code.
                  </p>
                  <p className="py-4">WITH CERTI, YOU CAN VERIFY AND AUTHENTICATE:</p>
                  <ul className="list-disc pl-8">
                    <li> The certificate issuer and recipient.</li>
                    <li> Date of issue. </li>
                    <li> Validity Status of the certificate. </li>
                    <li> The certificate's origin by verifying its Blockchain signature.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function BenefitsRender() {
  return (
    <>
     <Benefits color="pink" />;
    </>
  );
}