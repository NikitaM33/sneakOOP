class Score {
  constructor() {
    this.scoreCount = 0;
    this.currentScore = document.querySelector('.currentScore');
    this.bestScorediv = document.querySelector('.bestScoreDiv');
    this.score = document.createElement('div');
    this.bestScore = document.createElement('div');
  }

  setBestScore() {
    let getBestScore = localStorage.getItem('score');

    this.bestScore.classList.add('bestScore');
    this.bestScore.innerHTML = getBestScore;

    this.bestScorediv.appendChild(this.bestScore);
  }

  draw() {
    this.score.classList.add('score');
    this.score.innerHTML = this.scoreCount;
    
    this.currentScore.appendChild(this.score);
  }

  increment() {
    this.score.innerHTML = ++this.scoreCount;
  }
}
