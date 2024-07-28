// Simulated subscription handling
function subscribe(plan) {
  let amount;
  switch (plan) {
      case 'basic':
          amount = 8;
          break;
      case 'standard':
          amount = 17;
          break;
      case 'premium':
          amount = 28;
          break;
      default:
          alert('Invalid plan selected.');
          return;
  }
  alert(`You have selected the ${plan} plan which costs $${amount}.`);
  // Here you would integrate with a payment provider like Stripe or PayPal
  // For example, redirect to payment gateway or show payment modal
}

