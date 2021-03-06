
class TabLink {
  constructor(element) {
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab; //holding everything with the data attribute tab
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);  //selecting items with the .tabs-item class and the data attribute
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement); // creating new TabItem class
    
    // Add a click event listener on this instance, calling the select method on click
        this.element.addEventListener('click', () => this.select())  //add event listener to every element
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(link => link.classList.remove('tabs-link-selected'));

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected'); //whatever element is selected we're adding the tabs-link-selected class
    
    // Call the select method on the item associated with this link
      this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const tItems = document.querySelectorAll('.tabs-item')// Select all ".tabs-item" elements from the DOM
    Array.from(tItems).forEach(tItem => tItem.classList.remove('tabs-item-selected'))// Remove the class "tabs-item-selected" from each element
    this.element.classList.add('tabs-item-selected')// Add a class named "tabs-item-selected" to this element 
  }
}


// START HERE: create a reference to the ".tabs-link" class
let links = document.querySelectorAll('.tabs-link');

// Following the code in the Dropdown file, iterate through the array you created above creating a new instance of the TabLink class for each item. 
links = Array.from(links).map(link => new TabLink(link))

// DO THIS LAST: Once you have created an array of TabLink instances. call select() on the first item in the array
 links[0].select();