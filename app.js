(function () {
  const defaults = {
    sales: 30000000,
    stockout: 3,
    margin: 22,
    inventory: 3000000,
    carry: 10,
    waste: 70000,
    labor: 35000,
    service: 80000,
    compliance: 15000,
    infra: 15000
  };

  const shares = {
    retailer: 0.32,
    supplier: 0.145,
    platform: 0.375,
    infra: 0.16
  };

  const ids = Object.keys(defaults);
  const form = document.getElementById('calcForm');
  const resetButton = document.getElementById('resetButton');
  const menuButton = document.getElementById('menuButton');
  const siteNav = document.getElementById('siteNav');

  const money = new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency: 'CNY',
    currencyDisplay: 'symbol',
    maximumFractionDigits: 0
  });

  function value(id) {
    const n = Number(document.getElementById(id).value);
    return Number.isFinite(n) && n >= 0 ? n : 0;
  }

  function show(id, number) {
    document.getElementById(id).textContent = money.format(number);
  }

  function calculate() {
    const sales = value('sales');
    const stockout = value('stockout') / 100;
    const margin = value('margin') / 100;
    const inventory = value('inventory');
    const carry = value('carry') / 100;
    const waste = value('waste');
    const labor = value('labor');
    const service = value('service');
    const compliance = value('compliance');
    const infra = value('infra');

    const recoveredSales = sales * stockout;
    const grossProfit = recoveredSales * margin;
    const inventorySaving = inventory * carry / 12;
    const benefit = grossProfit + inventorySaving + waste + labor;
    const netBenefit = benefit - service - compliance - infra;

    show('recoveredSales', recoveredSales);
    show('grossProfit', grossProfit);
    show('inventorySaving', inventorySaving);
    show('benefit', benefit);
    show('netBenefit', netBenefit);
    show('retailerShare', netBenefit * shares.retailer);
    show('supplierShare', netBenefit * shares.supplier);
    show('platformShare', netBenefit * shares.platform);
    show('infraShare', netBenefit * shares.infra);
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    calculate();
  });

  resetButton.addEventListener('click', function () {
    ids.forEach(function (id) {
      document.getElementById(id).value = defaults[id];
    });
    calculate();
  });

  if (menuButton && siteNav) {
    menuButton.addEventListener('click', function () {
      const open = siteNav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    siteNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        siteNav.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  calculate();
})();
