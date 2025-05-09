// counter.js
// A simple counter implementation with modern JavaScript

class Counter {
    constructor(containerId, initialValue = 0) {
      this.container = document.getElementById(containerId);
      this.count = initialValue;
      this.history = [];
      this.initialize();
    }
  
    initialize() {
      // Create the counter UI
      this.container.innerHTML = `
        <div class="counter-container">
          <h2>JavaScript Counter</h2>
          <div class="counter-display">${this.count}</div>
          <div class="counter-controls">
            <button class="counter-btn decrement">-</button>
            <button class="counter-btn increment">+</button>
            <button class="counter-btn reset">Reset</button>
          </div>
          <div class="counter-history">
            <h3>Counter History</h3>
            <ul class="history-list"></ul>
          </div>
        </div>
      `;
  
      // Cache DOM elements
      this.displayElement = this.container.querySelector('.counter-display');
      this.historyList = this.container.querySelector('.history-list');
      
      // Add event listeners
      const decrementBtn = this.container.querySelector('.decrement');
      const incrementBtn = this.container.querySelector('.increment');
      const resetBtn = this.container.querySelector('.reset');
      
      decrementBtn.addEventListener('click', () => this.decrement());
      incrementBtn.addEventListener('click', () => this.increment());
      resetBtn.addEventListener('click', () => this.reset());
      
      // Add keyboard support
      document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp') this.increment();
        if (e.key === 'ArrowDown') this.decrement();
        if (e.key === 'r') this.reset();
      });
      
      // Initial render
      this.updateDisplay();
    }
    
    increment() {
      this.count++;
      this.addToHistory('Incremented', this.count);
      this.updateDisplay();
    }
    
    decrement() {
      this.count--;
      this.addToHistory('Decremented', this.count);
      this.updateDisplay();
    }
    
    reset() {
      this.count = 0;
      this.addToHistory('Reset', this.count);
      this.updateDisplay();
    }
    
    addToHistory(action, newValue) {
      const timestamp = new Date().toLocaleTimeString();
      this.history.push({ action, newValue, timestamp });
      
      // Keep history limited to most recent 10 actions
      if (this.history.length > 10) {
        this.history.shift();
      }
      
      this.updateHistoryDisplay();
    }
    
    updateDisplay() {
      // Update the counter display with animation
      this.displayElement.classList.add('update');
      this.displayElement.textContent = this.count;
      
      // Remove animation class after animation completes
      setTimeout(() => {
        this.displayElement.classList.remove('update');
      }, 200);
    }
    
    updateHistoryDisplay() {
      // Clear and rebuild history list
      this.historyList.innerHTML = '';
      
      // Add history items in reverse chronological order
      [...this.history].reverse().forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'history-item';
        listItem.innerHTML = `
          <span class="history-time">${item.timestamp}</span>
          <span class="history-action">${item.action}</span>
          <span class="history-value">${item.newValue}</span>
        `;
        this.historyList.appendChild(listItem);
      });
    }
  }
  
  // Initialize the counter when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    const counter = new Counter('counter-app');
  });