document.addEventListener('DOMContentLoaded', function() {
  fetch('statics/say.txt')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.text();
    })
    .then(text => {
      document.getElementById('content').innerText = text;
    })
    .catch(error => {
      console.error('加载文件失败:', error);
      document.getElementById('content').innerText = '内容加载失败，请稍后再试。';
    });
});
