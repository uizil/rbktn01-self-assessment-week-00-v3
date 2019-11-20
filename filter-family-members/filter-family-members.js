// `filterFamilyMembers` accepts two arguments, a family tree object, and a truth test. `filterFamilyMembers` 
// returns an array, in any order, of the full names of family members who pass the passed in truth test.
// You will need to use recursion in your solution in order to handle nested family trees.
//
// A family member looks like this:
//
// {
//   firstName: 'Fred'
//   lastName: 'Zirdung'
//   location: 'San Francsico'
//   children: [/* ... */]
// }
//
// EXAMPLE:
//
// var familyTree = {
//   'firstName': 'Beth',
//   'lastName': 'Johnson',
//   'location': 'San Francisco',
//   'children': [
//     {
//       'firstName': 'Beth Jr.',
//       'lastName': 'Johnson',
//       'location': 'Berkeley',
//       'children': [
//         {
//           'firstName': 'Smitty',
//           'lastName': 'Won',
//           'location': 'Beijing',
//           'children': []
//         }
//       ]
//     },
//     {
//       'firstName': 'Joshie',
//       'lastName': 'Wyattson',
//       'location': 'Berkeley',
//       'children': []
//     }
//   ]
// };

// var livesInBerkeley = function (familyMember) {
//   return familyMember.location === 'Berkeley';
// }

// filterFamilyMembers(familyTree, livesInBerkeley)
//
// returns ['Beth Jr. Johnson', 'Joshie Wyattson'];



var filterFamilyMembers = function (familyTree, truthTest) {
  // All your code in this function body
	var result = [];

  /*if (Array.isArray(familyTree)) {
  	if(truthTest(familyTree[0])) {

  		console.log(familyTree.firstName + ' ' + familyTree.lastName);
  		return filterFamilyMembers(familyTree.slice(1), truthTest) 
  	}
  	if (familyTree.length === 0) {
  		return result;
  	}
  }*/
  
  // console.log('hi')
  
	if (Array.isArray(familyTree)) {
		for(var i = 0; i < familyTree.children.length; i++) {
			if (truthTest(familyTree.children[i])) {
				console.log(familyTree.firstName + ' ' + familyTree.lastName)
			}
			if (familyTree.children[i].children.length > 0) {
				return filterFamilyMembers(familyTree.children[i].children, truthTest)
			}
		}
	return filterFamilyMembers(familyTree.children, truthTest)
	} else {
		if(truthTest(familyTree)) {
  		console.log(familyTree.firstName + ' ' + familyTree.lastName);
  		result.push(familyTree.firstName + ' ' + familyTree.lastName);
  	}
  	if (family.children.length > 0) {
  		return filterFamilyMembers(family.children, truthTest);
  	}
	}
  
  return 'zz';
};

