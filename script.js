function sendMessage() {
  const content = document.getElementById("content").value || '';

  const tokens = document.getElementById("token").value.split("\n");
  if (tokens.includes("")) {
    alert("Please Enter Tokens");
    return;
  }

  const channelIds = document.getElementById("channelId").value.split("\n");
  if (channelIds.includes("")) {
    alert("Please Enter Channels");
    return;
  }

  if (!content) {
    alert("Please Enter Message");
    return;
  }

  for (let j = 0; j < tokens.length; j++) {
    const token = tokens[j];
    for (let k = 0; k < channelIds.length; k++) {
      const channelId = channelIds[k];
      const xhr = new XMLHttpRequest();
      const formData = new FormData();

      let modifiedContent = content;

      formData.append("content", modifiedContent);

      xhr.open("POST", `https://discord.com/api/v9/channels/${channelId}/messages`);
      xhr.setRequestHeader("Authorization", `${token}`);
      xhr.send(formData);
    }
  }

  alert(`Succeed To Send Message`);
}
