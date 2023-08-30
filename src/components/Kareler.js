/*
Kareler Talimaları

Aşağıdaki kısa videoyu izleyin:
https://www.ergineer.com/assets/materials/a664dfe7-kareler.gif

Bu bileşen, bir yandan "kare idlerinin" listesinin kaydını tutar,
ve şu anda aktif olan id yi tutar. Yani iki dilim kullanılacak!
Biri kareleri oluşturmak için kullanılır, diğeri ise id yi tutmak için,
böylece bileşen hangi karenin o anda aktif olduğunu bilir.

Herhangi bir noktada yalnızca bir kare aktif olabilir (ya da hiçbiri)

Aşaıdaki yorumları takip edin.
*/

import React, { useState } from "react";

//Bu değişkeni YALNIZCA bir durum dilimini yüklemek için kullanın!
const KareIdListesi = ["sqA", "sqB", "sqC", "sqD"];

export default function Kareler() {
  const [kareler, setKareler] = useState(KareIdListesi);
  const [aktifKare, setAktifKare] = useState(null);

  const ClassAdiAl = (id) => {
    if (id === aktifKare) {
      return "active";
    }
    return "";
  };

  const AktifEt = (id) => {
    if (aktifKare === id) {
      setAktifKare(null);
    } else {
      setAktifKare(id);
    }
  };

  return (
    <div className="widget-squares container">
      <h2>Kareler</h2>
      <div className="squares">
        {
          // Kötü bug!  'KareIdListesi' yerine bir state dilimi kullanmalıyız.
          // Şöyle diyebiliriz: "aa bu çalışıyor!" Ama kareler bir state diliminden gelmiyorsa,
          // asla yeni kare ekleyemeyiz, kareleri düzenleyemeyiz ya da silemeyiz. Düzeltin!
          KareIdListesi.map((id) => (
            <div
              id={id}
              key={id}
              className={`square ${ClassAdiAl(id)}`}
              onClick={() => AktifEt(id)}
            ></div>
          ))
        }
      </div>
    </div>
  );
}
