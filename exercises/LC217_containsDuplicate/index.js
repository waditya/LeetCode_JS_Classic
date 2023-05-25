const containsDuplicate = nums => {

    // console.log("Array length is : "+nums.length);

    // Create a Set using array

    let set = new Set(nums);
    // console.log("Size of Set is : "+set.size);

    return set.size===nums.length?false:true;
};


module.exports = containsDuplicate;


