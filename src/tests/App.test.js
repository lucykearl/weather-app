import { render } from "@testing-library/react";
import App from "../components/App";

test("renders learn react link", () => {
  const validProps = {
    location: {
      city: "test city", 
      country: "test country"
    }
  }

  render(<App location={validProps.location} />);
})