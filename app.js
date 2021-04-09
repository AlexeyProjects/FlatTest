const App = {
	data() {
		return {
			nodes: ['ssdads','sadadasda','sdadas'],
			flats: {
				'flats 1': {
			      rooms: '1',
			      image: 'img/flat1.png',
			      paremetrs : {
			      		'этаж': '5 из 19',
			      		'Общая площадь': '32,24 м²',
			      		'Высота потолков': '3,2 м',
			      		'Жилая площадь': '22,24 м²',
			      		'Отделка': 'Предчистовая',
			      		'Площадь кухни': '10,24 м²'
			      },
			      date: '19 сентября',
			      pre_sum: 3612616,
			      total_sum: 3312666
			    },
			    'flats 2': {
			      rooms: '3',
			      image: 'img/flat1.png',
			      paremetrs : {
			      		'этаж': '3 из 19',
			      		'Общая площадь': '32,24 м²',
			      		'Высота потолков': '3,2 м',
			      		'Жилая площадь': '26,24 м²',
			      		'Отделка': 'Предчистовая',
			      		'Площадь кухни': '18,24 м²'
			      },
			      date: '19 сентября',
			      pre_sum: 3712696,
			      total_sum: 3312666
			    },
			    'flats 3': {
			      rooms: '5',
			      image: 'img/flat1.png',
			      paremetrs : {
			      		'этаж': '1 из 19',
			      		'Общая площадь': '32,24 м²',
			      		'Высота потолков': '3,2 м',
			      		'Жилая площадь': '29,24 м²',
			      		'Отделка': 'Предчистовая',
			      		'Площадь кухни': '11,24 м²'
			      },
			      date: '19 сентября',
			      pre_sum: 3712696,
			      total_sum: 3312666
			    },
			    'flats 4': {
			      rooms: '2',
			      image: 'img/flat1.png',
			      paremetrs : {
			      		'этаж': '12 из 19',
			      		'Общая площадь': '32,24 м²',
			      		'Высота потолков': '3,2 м',
			      		'Жилая площадь': '21,24 м²',
			      		'Отделка': 'Предчистовая',
			      		'Площадь кухни': '14,24 м²'
			      },
			      date: '19 сентября',
			      pre_sum: 3712696,
			      total_sum: 3312666
			    },
			    'flats 5': {
			      rooms: '2',
			      image: 'img/flat1.png',
			      paremetrs : {
			      		'этаж': '7 из 19',
			      		'Общая площадь': '32,24 м²',
			      		'Высота потолков': '3,2 м',
			      		'Жилая площадь': '20,24 м²',
			      		'Отделка': 'Предчистовая',
			      		'Площадь кухни': '12,24 м²'
			      },
			      date: '19 сентября',
			      pre_sum: 3412626,
			      total_sum: 3312666
			    }
			}
		}
	},
	methods: {
		removeFlat(index) {
			delete this.flats[index];
		}
	},
}
Vue.createApp(App).mount('#app')



let numbers = document.querySelectorAll('.number');

numbers.forEach((item) => {
  item.textContent = item.textContent.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,'$1 ');
})