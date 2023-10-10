import { render, screen } from "@testing-library/react";
import Followers from "./Pages/Followers";

test("should render follower", async () => {
  render(<Followers />);
  //   const followerElement = await screen.findByTestId("followers-item-0");
  //   expect(followerElement).toBeInTheDocument();
  const followerElement = await screen.findAllByRole("heading");
  expect(followerElement).toHaveLength(2);
});
