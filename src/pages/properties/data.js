const properties = [
  {
    id: 1,
    title: 'Bungalow at Lartebiokoshie',
    listingType: 'Rentals',
    state: 'Finished',
    shortDesc: 'With supporting text below as a natural lead-in to additional contenposuere erat a ante',
    totalTasks: 21,
    totalComments: 741,
    totalMembers: 10,
    progress: 100,
    category: 'Web Design',
    dueDate: '15 Dec',
    totalTasksCompleted: 121,
    totalHoursSpent: 2500,
    startDate: '17 July 2019',
    startTime: '1:00 PM',
    endDate: '22 July 2019',
    endTime: '1:00 PM',
    totalBudget: '$15,800',
    owner: 'Rick Perry'
  },
  {
    id: 2,
    title: 'Office Space at Club Corner',
    state: 'Ongoing',
    listingType: 'Rentals',
    shortDesc: 'This card has supporting text below as a natural lead-in to additional content is a little bit longer',
    totalTasks: 81,
    totalComments: 103,
    totalMembers: 6,
    progress: 21,
    category: 'Web Design',
    dueDate: '15 Dec',
    totalTasksCompleted: 121,
    totalHoursSpent: 2500,
    startDate: '17 July 2019',
    startTime: '1:00 PM',
    endDate: '22 July 2019',
    endTime: '1:00 PM',
    totalBudget: '$15,800',
    owner: 'Rick Perry'

  },
  {
    id: 3,
    title: 'Land at Ayikuma',
    state: 'Short Stay',
    listingType: 'Rentals',
    shortDesc: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid',
    totalTasks: 12,
    totalComments: 48,
    totalMembers: 2,
    progress: 66,
    category: 'Web Design',
    dueDate: '20 Dec',
    totalTasksCompleted: 121,
    totalHoursSpent: 2500,
    startDate: '17 July 2019',
    startTime: '1:00 PM',
    endDate: '22 July 2019',
    endTime: '1:00 PM',
    totalBudget: '$15,800',
    owner: 'Rick Perry'

  },
  {
    id: 4,
    title: 'Hyper v2.1 - React, Webpack',
    state: 'Finished',
    listingType: 'Rentals',
    shortDesc: "Some quick example text to build on the card title and make up the bulk of the card's content",
    totalTasks: 50,
    totalComments: 1024,
    totalMembers: 5,
    progress: 100,
    category: 'Web Design',
    dueDate: '22 Dec',
    totalTasksCompleted: 121,
    totalHoursSpent: 2500,
    startDate: '17 July 2019',
    startTime: '1:00 PM',
    endDate: '22 July 2019',
    endTime: '1:00 PM',
    totalBudget: '$15,800',
    owner: 'Rick Perry'
  },
  {
    id: 5,
    title: 'Hyper 2.2 - Vue.Js and Laravel',
    state: 'Ongoing',
    listingType: 'Rentals',
    shortDesc: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.',
    totalTasks: 3,
    totalComments: 104,
    totalMembers: 3,
    progress: 45,
    category: 'Android',
    dueDate: '17 Dec',
    totalTasksCompleted: 121,
    totalHoursSpent: 2500,
    startDate: '17 July 2019',
    startTime: '1:00 PM',
    endDate: '22 July 2019',
    endTime: '1:00 PM',
    totalBudget: '$15,800',
    owner: 'Rick Perry'
  },
  {
    id: 6,
    title: 'Hyper 2.3 - Rails, NodeJs, Mean',
    state: 'Planned',
    listingType: 'Rentals',
    shortDesc: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.',
    totalTasks: 11,
    totalComments: 201,
    totalMembers: 5,
    progress: 55,
    category: 'Web Design',
    dueDate: '20 Dec',
    totalTasksCompleted: 121,
    totalHoursSpent: 2500,
    startDate: '17 July 2019',
    startTime: '1:00 PM',
    endDate: '22 July 2019',
    endTime: '1:00 PM',
    totalBudget: '$15,800',
    owner: 'Rick Perry'
  },
  {
    id: 7,
    title: 'Hyper - Landing page and UI Kit',
    state: 'Planned',
    listingType: 'Rentals',
    shortDesc: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.',
    totalTasks: 3,
    totalComments: 104,
    totalMembers: 3,
    progress: 45,
    category: 'Android',
    dueDate: '25 Dec',
    totalTasksCompleted: 121,
    totalHoursSpent: 2500,
    startDate: '17 July 2019',
    startTime: '1:00 PM',
    endDate: '22 July 2019',
    endTime: '1:00 PM',
    totalBudget: '$15,800',
    owner: 'Rick Perry'
  },
  {
    id: 8,
    title: 'Hyper 3.0 - Scoping',
    state: 'Finished',
    listingType: 'Rentals',
    shortDesc: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.',
    totalTasks: 3,
    totalComments: 104,
    totalMembers: 3,
    progress: 100,
    category: 'Web Design',
    dueDate: '30 Dec',
    totalTasksCompleted: 121,
    totalHoursSpent: 2500,
    startDate: '17 July 2019',
    startTime: '1:00 PM',
    endDate: '22 July 2019',
    endTime: '1:00 PM',
    totalBudget: '$15,800',
    owner: 'Rick Perry'
  },
];

const propertyType = [
  {
    name: "Commercial",
    icon: "building"
  },
  {
    name: "Residential",
    icon: "home"
  }
]

const structureType = [
  {
    name: "House",
    icon: "home-alt"
  },
  {
    name: "Apartment",
    icon: "bed-double"
  },
  {
    name: "Office Complex",
    icon: "shop"
  }
]

const state = [
  {
    name: "Occupied",
    icon: "home-alt"
  },
  {
    name: "Vacant",
    icon: "bed-double"
  },
  {
    name: "Maintenance",
    icon: "shop"
  }
]


export { properties, propertyType, structureType, state };
