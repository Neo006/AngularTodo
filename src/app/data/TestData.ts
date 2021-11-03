import { Category } from "../model/Category";
import { Priority } from "../model/Priority";
import { Task } from "../model/Task";

export class TestData {
  static categories: Category[] = [
    {id: 1, title: 'Работа'},
    {id: 2, title: 'Семья'},
    {id: 3, title: 'Учеба'},
    {id: 4, title: 'Отдых'},
    {id: 5, title: 'Спорт'},
    {id: 6, title: 'Еда'},
    {id: 7, title: 'Финансы'},
    {id: 8, title: 'Гаджеты'},
    {id: 9, title: 'Здоровье'},
    {id: 10, title: 'Автомобиль'}
  ];

  static priorities: Priority[] = [
    {id: 1, title: 'Низкий', color: '#e5e5e5'},
    {id: 2, title: 'Средний', color: '#e5e5e5'},
    {id: 3, title: 'Высокий', color: '#e5e5e5'},
    {id: 4, title: 'Очень срочно!!', color: '#e5e5e5'}
  ];

  static tasks: Task[] = [
    {
      id: 1,
      title: 'Залить бензин полный бак',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[9],
      date: new Date('2021-04-10')
    },
    {
      id: 2,
      title: 'Передать отчеты начальнику управления',
      priority: TestData.priorities[0],
      completed: false,
      category: TestData.categories[0],
      date: new Date('2021-04-11')
    },
    {
      id: 3,
      title: 'Убраться у себя в комнате, полить растения',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[1]
    },
    {
      id: 4,
      title: 'Сходить в парк с семьей, пригласить друзей',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[1],
      date: new Date('2021-08-17')
    },
    {
      id: 5,
      title: 'Найти и выучить учебник по квантовой физике',
      completed: false,
      category: TestData.categories[2],
    },
    {
      id: 6,
      title: 'Сходить на семинар по программированию',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[2],
      date: new Date('2021-06-11')
    },
    {
      id: 7,
      title: 'Найти билеты в Италию, выбрать отель',
      priority: TestData.priorities[2],
      completed: false,
      category: TestData.categories[3]
    },
  ];
}
