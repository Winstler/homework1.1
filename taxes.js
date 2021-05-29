var income = Number(prompt("Введите ваше количество прибыли: "));
var taxRate;
if (income<=9950)
	{
		taxRate = 0.1;
	}
else if (9950<income || income<=40525)
	{
		taxRate = 0.12;
	}
else if (40525<income || income<=86375)
	{
		taxRate = 0.22;
	}
else if (86375<income || income<=164925)
	{
		taxRate = 0.24;
	}
else if (164925<income || income<=209425)
	{
		taxRate = 0.32;
	}
else if (209425<income || income<=523600)
	{
		taxRate = 0.35;
	}
else if(523600<income)
	{
		taxRate = 0.37;
	}
var tax = income * taxRate;
var clearIncome = income - tax;
console.log('При прибыли в '+income+"$, вы платите налог в "+tax+'$. Итого чистой прибыли вы получаете '+clearIncome+'$')