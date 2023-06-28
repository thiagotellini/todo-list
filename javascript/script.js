(function ($) {
  'use strict';
  $(function () {
    var todoListItem = $('.todo-list');
    var todoListInput = $('.todo-list-input');

    // Carregar itens do localStorage ao iniciar
    function loadItems() {
      var savedItems = localStorage.getItem('todoItems');
      if (savedItems) {
        todoListItem.html(savedItems);
      }
    }

    // Salvar itens no localStorage
    function saveItems() {
      var items = todoListItem.html();
      localStorage.setItem('todoItems', items);
    }

    $('.todo-list-add-btn').on('click', function (event) {
      event.preventDefault();
      addItem();
    });

    todoListInput.on('keypress', function (event) {
      if (event.which === 13) {
        event.preventDefault();
        addItem();
      }
    });

    function addItem() {
      var item = todoListInput.val();

      if (item) {
        todoListItem.append(
          "<li><div class='form-check'><label class='form-check-label'><input class='checkbox' type='checkbox'/>" +
            item +
            "<i class='input-helper'></i></label></div><i class='remove mdi mdi-close-circle-outline'></i></li>"
        );
        todoListInput.val('');
        todoListInput.focus(); // Focalizar o campo de input
        saveItems(); // Salvar itens no localStorage
      }
    }

    todoListItem.on('change', '.checkbox', function () {
      if ($(this).attr('checked')) {
        $(this).removeAttr('checked');
      } else {
        $(this).attr('checked', 'checked');
      }

      $(this).closest('li').toggleClass('completed');
      saveItems(); // Salvar itens no localStorage
    });

    todoListItem.on('click', '.remove', function () {
      $(this).parent().remove();
      saveItems(); // Salvar itens no localStorage
    });

    loadItems(); // Carregar itens ao iniciar
  });
})(jQuery);



var myLink = document.querySelector('a[href="#"]');
myLink.addEventListener('click', function (e) {
  e.preventDefault();
});
