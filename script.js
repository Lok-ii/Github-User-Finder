let form = document.querySelector("form");
let search = document.querySelector("#username");
let container = document.querySelector(".secondaryContainer");

let user = async () => {
  let fetchData = await fetch(`https://api.github.com/users/${search.value}`);
  let data = await fetchData.json();
  let userDetails = document.createElement("div");
  userDetails.className = "container";
  container.innerHTML = "";
  if (data.message === "Not Found") {
    userDetails.innerText = "User not found, Please enter a vaild username.";
  } else {
    userDetails.innerHTML = `<div class="user">
    <div class="profile">
      <img src="${data.avatar_url}" alt="" />
      <span class="names">
        <span class="name">${data.name}</span>
        <a href="${data.html_url}" class="username">@${data.login} </a>
      </span>
    </div>
    <span class="join-date"> Joined ${data.created_at.slice(0, 10)} </span>
  </div>

  <p class="bio">
    ${data.bio}
  </p>

  <div class="details">
    <span class="repo"
      >Repos <br><br>
      <p class="repo-count">${data.public_repos}</p>
    </span>

    <span class="followers"
      >Followers <br><br>
      <p class="follower-count">${data.followers}</p>
    </span>

    <span class="following"
      >Following <br><br>
      <p class="following-count">${data.following}</p>
    </span>
  </div>

  <div class="other-details">
    <div class="links">
      <span
        ><i class="fa-solid fa-map-location-dot"></i>
        <span class="location">${data.location}</span></span
      >
      <br>
      <span
        ><i class="fa-solid fa-link"></i>
        <span class="website"
          >${data.blog}</span
        ></span
      >
    </div>

    <div class="other-links">
      <span
        ><i class="fa-brands fa-twitter"></i>
        <span class="twitter">- ${data.twitter_username}</span></span
      >
      <br>
      <span
        ><i class="fa-solid fa-building"></i>
        <span class="organisation">- ${data.company}</span></span
      >
    </div>
  </div>`;
  }

  container.appendChild(userDetails);
  console.log(data);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  user();
  search.value = "";
});
