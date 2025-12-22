// ===== DTS CORE MODEL =====

// parameters
export const dt = 1e-6; // 1 µs

export function drivePulse(V, N, t_on=40, t_off=140){
  return Array.from({length:N}, (_,i)=>
    (i>t_on && i<t_off) ? V : 0
  );
}

export function simulateDTS(vin, delay, damping){
  const N = vin.length;
  const P = Array(N).fill(0);
  const Q = Array(N).fill(0);
  const d = Math.floor(delay);

  for(let i=d+1;i<N;i++){
    P[i] = P[i-1]*(1-damping) + vin[i-d];
    Q[i] = Math.max(P[i],0);
  }
  return {P, Q};
}

export function calcSpectrum(Q){
  const spec = {};
  Q.forEach((q,i)=>{
    if(q>0){
      spec[i] = (spec[i]||0)+1;
    }
  });
  return spec;
}
