 function showDetails(){
      // simple interst formula is prt
      const simpleP = (Number(document.getElementById('simpleP').value));
      const simpleR = (Number(document.getElementById('simpleR').value));
      const simpleT = (Number(document.getElementById('simpleT').value));
      const SMonth = (Number(document.getElementById('simpleMonth').value));

      let roundedRate = simpleR * 0.01;
      let T = (SMonth / 12) + simpleT  ; 
      let I = simpleP * (roundedRate * T);
      let I1 = I.toFixed(2);

      let totalInterst = simpleP + I ;
      let totalSimple = totalInterst.toFixed(2);
      alert(`Simple interest: ₱${I1} `);
      alert(`Total interest: ₱${totalSimple}`);
    }
    function runChoice(option){
    switch (option){
      case 'anual':
      const comP = (Number(document.getElementById('compoundP').value));
      const comR = (Number(document.getElementById('compoundR').value));
      const comT = (Number(document.getElementById('compoundT').value));
      const cMonth = (Number(document.getElementById('compoundMonth').value));
      //compound interest A = P (1 + r/n) to the power of nt
      let R = comR * 0.01;
      let T = (cMonth / 12) + comT ;
      let nt = 1 * T;
      let A = comP * (1 + R / 1) ** (nt);
      let A1 = A.toFixed(2);
      console.log(`Total: ₱${A1}`)
      alert(`Total: ₱${A1}.`)
      break;

      case 'semi':
      const semiP = (Number(document.getElementById('compoundP').value));
      const semiR = (Number(document.getElementById('compoundR').value));
      const semiT = (Number(document.getElementById('compoundT').value));
      const semiMonth = (Number(document.getElementById('compoundMonth').value));

      let Rsemi = semiR * 0.01;
      let Tsemi = (semiMonth / 12) + semiT ;
      let ntsemi = 2 * Tsemi;
      let Asemi = semiP * (1 + Rsemi / 2) ** (ntsemi);
      let A1semi = Asemi.toFixed(2);
      console.log(`Total: ₱${A1semi}`)
      alert(`Total: ₱${A1semi}.`)
      break;

      case 'quarter':
      const quarterP = (Number(document.getElementById('compoundP').value));
      const quarterR = (Number(document.getElementById('compoundR').value));
      const quarterT = (Number(document.getElementById('compoundT').value));
      const quarterMonth = (Number(document.getElementById('compoundMonth').value));

      let Rq = quarterR * 0.01;
      let Tq = (quarterMonth / 12) + quarterT ;
      let ntq = 4 * Tq;
      let Aq = quarterP * (1 + Rq / 4) ** (ntq);
      let A1q = Aq.toFixed(2);
      
      console.log(`Total: ₱${A1q}`)
      alert(`Total: ₱${A1q}.`)
      break;

       case 'monthly':
      const mP = (Number(document.getElementById('compoundP').value));
      const mR = (Number(document.getElementById('compoundR').value));
      const mT = (Number(document.getElementById('compoundT').value));
      const mMonth = (Number(document.getElementById('compoundMonth').value));

      let Rm = mR * 0.01;
      let Tm = (mMonth / 12) + mT ;
      let ntm = 12 * Tm;
      let Am = mP * (1 + Rm / 12) ** (ntm);
      let A1m = Am.toFixed(2);
      console.log(`Total: ₱${A1m}`)
      alert(`Total: ₱${A1m}.`)
      break;

      case 'weekly':
      const wP = (Number(document.getElementById('compoundP').value));
      const wR = (Number(document.getElementById('compoundR').value));
      const wT = (Number(document.getElementById('compoundT').value));
      const wMonth = (Number(document.getElementById('compoundMonth').value));

      let Rw = wR * 0.01;
      let Tw = (wMonth / 12) + wT ;
      let ntw = 52 * Tw;
      let Aw = wP * (1 + Rw / 52) ** (ntw);
      let A1w = Aw.toFixed(2);
      console.log(`Total: ₱${A1w}`)
      alert(`Total: ₱${A1w}.`)
      break;

      case 'daily':
      const dP = (Number(document.getElementById('compoundP').value));
      const dR = (Number(document.getElementById('compoundR').value));
      const dT = (Number(document.getElementById('compoundT').value));
      const dMonth = (Number(document.getElementById('compoundMonth').value));

      let Rd = dR * 0.01;
      let Td = (dMonth / 12) + dT ;
      let ntd = 365 * Td;
      let Ad = dP * (1 + Rd / 365) ** (ntd);
      let A1d = Ad.toFixed(2);
      console.log(`Total: ₱${A1d}`)
      alert(`Total: ₱${A1d}.`)
      break;


    }
   }