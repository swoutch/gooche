chrome.action.onClicked.addListener(async (tab) => {
  const newUrl = `https://google.com/search?q=cache:${tab.url}`;
  await chrome.tabs.update({ url: newUrl })
});
