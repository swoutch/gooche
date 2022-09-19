async function getCurrentTab() {
  let queryOptions = { active: true, lastFocusedWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

chrome.action.onClicked.addListener(async (tab) => {
  const currentTab = await getCurrentTab();
  console.log(currentTab);
  const newUrl = `https://google.com/search?q=cache:${currentTab.url}`;
  console.log(newUrl)
  await chrome.tabs.update(currentTab.id, { url: newUrl })
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js']
  });
});
