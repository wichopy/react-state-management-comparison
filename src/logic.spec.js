import { onShiftLeft, onShiftRight } from "./logic";

const cards = [
  {
    Assignee: "Thomas",
    description: "Study for exam"
  },
  {
    Assignee: "George",
    description: "Pay electricity bill"
  },
  {
    Assignee: "George",
    description: "Walk the dog."
  }
];

const assignees = ["Winnie", "Bob", "Thomas", "George"];

describe("logic", () => {
  it("shifts cards to the left", () => {
    expect(
      onShiftLeft(
        {
          Assignee: "George",
          description: "Walk the dog."
        },
        cards,
        assignees
      )
    ).toEqual([
      {
        Assignee: "Thomas",
        description: "Study for exam"
      },
      {
        Assignee: "George",
        description: "Pay electricity bill"
      },
      {
        Assignee: "Thomas",
        description: "Walk the dog."
      }
    ]);
  });

  it("shifts card to the right", () => {
    expect(
      onShiftRight(
        {
          Assignee: "Thomas",
          description: "Study for exam"
        },
        cards,
        assignees
      )
    ).toEqual([
      {
        Assignee: "George",
        description: "Pay electricity bill"
      },
      {
        Assignee: "Thomas",
        description: "Walk the dog."
      },
      {
        Assignee: "George",
        description: "Study for exam"
      }
    ]);
  });
});
