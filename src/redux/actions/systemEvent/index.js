export const system_layout_actions = {
  addUser: (state, action) => {
    state.status = "succeeded";
    state.user = action.payload;
    state.auth = true;
    state.loading=false;
    console.log("h1");
    localStorage.setItem("user", JSON.stringify(action.payload?._id || ""));
  },
};
