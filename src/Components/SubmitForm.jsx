import 'bootstrap/dist/css/bootstrap.min.css';

function SubmitForm() {
    return (
        <form>
            <div className="border rounded p-3">
                {/* Inputs naast elkaar */}
                <div className="d-flex flex-column flex-lg-row gap-4 mb-3">
                    <div className="flex-fill">
                        <label htmlFor="name" className="form-label">
                            Your name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                        />
                    </div>

                    <div className="flex-fill">
                        <label htmlFor="email" className="form-label">
                            Your email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                        />
                    </div>
                </div>

                {/* Message */}
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                        Your message
                    </label>
                    <textarea
                        className="form-control"
                        id="message"
                        rows="4"
                    />
                </div>

                {/* Button rechts */}
                <div className="d-flex justify-content-end">
                    <button type="submit" className="btn btn-primary button-red border-0">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
}

export default SubmitForm;
