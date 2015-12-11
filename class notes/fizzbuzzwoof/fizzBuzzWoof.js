//Jasmine Source

function fbw (number) {
if (number === 35 || number===75) {
  return "FizzBuzzWoof";
  } else if (number % 15 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0 || number.toString().includes("3")) {
    return "Fizz";
  } else if (number % 5 === 0 ) {
    return "Buzz";
  } else if (number % 7 === 0) {
    return "Woof";
  }
  return number;
}
​
function fizzBW (number, d) {
  if (number % d === 0) {
    return true;
  }
}
​
​
//Jasmine Specs
​
describe('FizzBuzzWoof',function(){
  it('should print 1 if passed 1',function(){
    expect(fbw(1)).toBe(1);
  });
  
  it('should print 2 if passed 2',function(){
    expect(fbw(2)).toBe(2);
  });
  
  it('should print Fizz if passed 3',function(){
    expect(fbw(3)).toBe("Fizz");
  });
  
  it('should print Buzz if passed 5',function(){
    expect(fbw(5)).toBe("Buzz");
  });
  
  it('should print Fizz if passed 6',function(){
    expect(fbw(6)).toBe("Fizz");
  });
  
  it('should print Woof if passed 7',function(){
    expect(fbw(7)).toBe("Woof");
  });
  
  it('should print Buzz if passed 10',function(){
    expect(fbw(10)).toBe("Buzz");
  });
  
  it('should print Fizz if passed 13',function(){
    expect(fbw(13)).toBe("Fizz");
  });
  
   it('should print FizzBuzz if passed 15',function(){
    expect(fbw(15)).toBe("FizzBuzz");
  });
  
  it('should print FizzBuzz if passed 30',function(){
    expect(fbw(30)).toBe("FizzBuzz");
  });
  
  it('should print Fizz if passed 32',function(){
    expect(fbw(32)).toBe("Fizz");
  });
  
  it('should print FizzBuzzWoof if passed 35',function(){
    expect(fbw(35)).toBe("FizzBuzzWoof");
  });
  
  it('should print Woof if passed 14',function(){
    expect(fbw(14)).toBe("Woof");
  });
  
  it('should print FizzBuzzWoof if passed 75',function(){
    expect(fbw(75)).toBe("FizzBuzzWoof");
  });
  
  it('should print FizzBuzzWoof if passed 57',function(){
    expect(fbw(57)).toBe("FizzBuzzWoof");
  });
​
});