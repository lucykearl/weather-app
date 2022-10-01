import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

const validProps = {
  searchText: "some Search Text",
  setSearchText: jest.fn(),
  onSubmit: jest.fn(),
};
describe("Search Form", () => {
  it("renders search button correctly", () => {
    const { getByText } = render(
      <SearchForm
        searchText=""
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );
    const button = screen.getAllByRole("button");

    expect(button).toHaveLength(1);

    expect(getByText(/search/i)).toBeInstanceOf(HTMLButtonElement);
  });

  it("click handler is called", () => {
    render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );
    const searchButton = screen.getByText(/search/i);
    fireEvent.click(searchButton);

    expect(validProps.onSubmit).toHaveBeenCalledTimes(1);
  });
});