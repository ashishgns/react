import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import 'regenerator-runtime/runtime';
import User from "../src/user";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders user data", async () => {
  const fakeUser = {
    name: "Joni Baez",
    age: "32",
    address: "123, Charming Avenue"
  };

  global.fetch = jest.fn().mockImplementation(setupFetchStub(fakeUser));
  
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeUser)
    })
  );

  function setupFetchStub(data) {
    return function fetchStub(_url) {
      return new Promise((resolve) => {
        resolve({
          json: () =>
            Promise.resolve({
              data,
            }),
        })
      })
    }
  }

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<User id="123" />, container);
  });

  expect(container.querySelector("summary").textContent).toBe(fakeUser.name);
  expect(container.querySelector("strong").textContent).toBe(fakeUser.age);
  expect(container.textContent).toContain(fakeUser.address);

  global.fetch.mockClear();
  delete global.fetch;
  // remove the mock to ensure tests are completely isolated
  // global.fetch.mockRestore();
});