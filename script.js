(() => {
  const bar = document.querySelector('.filter-bar');
  if (!bar) return;
  const buttons = [...bar.querySelectorAll('button[data-filter]')];
  const papers = [...document.querySelectorAll('.paper[data-topics]')];
  const count = bar.querySelector('.filter-count');
  const show = topic => {
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === topic)));
    let visible = 0;
    papers.forEach(paper => {
      paper.hidden = topic !== 'all' && !paper.dataset.topics.split(' ').includes(topic);
      if (!paper.hidden) visible++;
    });
    count.textContent = `${visible} publication${visible === 1 ? '' : 's'}`;
  };
  buttons.forEach(button => button.addEventListener('click', () => show(button.dataset.filter)));
  // News and shared links must also reveal a paper hidden by the current filter.
  const revealAnchor = () => {
    const paper = papers.find(item => `#${item.id}` === location.hash);
    if (paper?.hidden) {
      show('all');
      paper.scrollIntoView({block: 'start'});
    }
  };
  window.addEventListener('hashchange', revealAnchor);
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      if (papers.some(paper => `#${paper.id}` === link.getAttribute('href') && paper.hidden)) show('all');
    });
  });
  bar.hidden = false;
  revealAnchor();
})();
