import TouchHeader from "../Components/TouchHeader";
import SubmitForm from "../Components/SubmitForm";
import SideContact from "../Components/SideContact";

function Contact() {
  return (
    <>

      <TouchHeader />

      <div className="container px-4 mt-4">
        <div className="row g-4">
          {/* SubmitForm col-12 col-lg-8 */}
          <div className="col-12 col-lg-8">
            <SubmitForm />
          </div>

          {/* SideContact col-12 col-lg-4 */}
          <div className="col-12 col-lg-4">
            <SideContact />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;