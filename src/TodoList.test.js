import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", function () {
  render(<TodoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new item", function () {
  const { getByLabelText, queryByText } = render(<TodoList />);

  // no items yet
  expect(queryByText("Buy waffles")).not.toBeInTheDocument();

  const todoInput = getByLabelText("New To Do:");

  const submitBtn = queryByText("Add a new To Do!");

  // fill out the form
  fireEvent.change(todoInput, { target: { value: "Buy waffles" } });

  fireEvent.click(submitBtn);

  // item exists!
  expect(queryByText("Buy waffles")).toBeInTheDocument();
});
