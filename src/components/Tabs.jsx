import React from "react";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl text-center py-8">
      How Does It Work
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
                Generate Certificate
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
                 Verify Certificate
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Revoke Certificate
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block transition duration-500 hover:scale-110" : "hidden"} id="link1" >
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwuv-vUSN53XBsXHJPQNkgVGWWmdLoWCtTiN3pg96AKOqeJuBf" alt="form" className=" m-auto" />
                  <p className="px-20 py-4">
                  Generating certificate will also upload it to blockchain via a smart contract henceforth making 
                  it immutable and can't be forged. Download and hare the link directly. Anybody can validate and verify the certificate with custom QR code on it.
                  </p>
                </div>
                <div className={openTab === 2 ? "block transition duration-500 hover:scale-110" : "hidden"} id="link2">
                  <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSv6g1dx2xtFdzoMwrTXgtL03Z_n6h_6kQqgDR8Qy_44O5Q2K-l" alt="verify" className=" m-auto" />
                  <p className="px-20">
                  Verifying or Validating has become a lot easier with blockchain integration. Each certificate 
                  transaction hash remains forever on the blockchain network and be verified or validated by anybody.
                  </p>
                </div>
                <div className={openTab === 3 ? "block transition duration-500 hover:scale-110" : "hidden"} id="link3">
                  <img src="https://blog.apnic.net/wp-content/uploads/2020/03/Revoke_Banner-555x202.png?v=fb2569fa9a869d6b71c10f346b994930" alt="revoke"  className=" m-auto h-52" />
                  <p className="px-20 py-4">
                  You can also revoke or re-issue certificates with a single click without having to gothrough long 
                  process of informing multiple entities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
     <Tabs color="pink" />;
    </>
  );
}