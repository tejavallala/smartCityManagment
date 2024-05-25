import React, { useState } from 'react';

const PetrolPumpPage = () => {
    const [petrolPumps, setPetrolPumps] = useState([
        {
          name: 'ABC Petrol Pump',
          area: 'Downtown',
          distance: 5,
          image: 'data:image/jpeg;base64,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',
        },
        {
          name: 'XYZ Petrol Pump',
          area: 'Suburb',
          distance: 10,
          image: 'data:image/jpeg;base64,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',
        },
        {
          name: 'Sunrise Petrol',
          area: 'City Center',
          distance: 8,
          image: 'data:image/jpeg;base64,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',
        },
        {
          name: 'City Fuel Station',
          area: 'Business District',
          distance: 12,
          image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAtwMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIDBAUGB//EAEAQAAEDAwIFAQQIAgcJAAAAAAEAAgMEBRESIQYTMUFRYRQicdEjMkWBkZShwXKxBxVCUlVihBYXMzRDgpLC8P/EABoBAQEBAQEBAQAAAAAAAAAAAAABAgMEBQb/xAA0EQEAAgIAAwUFBwMFAAAAAAAAARECAwQSIQUTMUFRcYGRofAUFSIyYcHRQrHhIzNDYvH/2gAMAwEAAhEDEQA/APlK9Tmk0qosHRBYzqg0sVEwgGjPRESI95VEwiwCiHlFXwjJz2VlG+KTBCyOhTzeqkq6tLU7gdgsTA7lHVeq8+UOuMt4lB3BWHQcxBXLUYBAKsQzMufPPkrrDnLI+VbYlQ560yiXoPkYWrdEgUsTB2QWMcqL439URY1yC2IoJt3JKom1EBZkbIUHDBA8patUWA1EpJr90KWsqNJ6oOjSVHqsyrpQ1xGACVznEt0IriQ0blc5wajNf7cSOqnKvMpkrCe5WoxS2d85PdbiEmVJlyeqrMoukx3RENfqqj5eWkI6jdEMFUSDksWNfhLE2PVGhj9lRdG8aUFkZBKDQMBuFBANyVRcdm4UgVOJHRVEA4jqVRqbUaRsVBpp5yT1KiunDNgAkrCLPaCT1UoPneqFIOnycBUHOAHVBHm57qpRh/qhTwjos7gKNqjEqIOjwghhBIbIJAqibZCERaJcAAFBoglQaWyB2ygsZIMlAczU5UBIOVYFZ8np2CosY09Tt6KWNVO4dSeig1CUnr07KC1r1AOlPQFERDyN8oEZD5VEmO7nogs5ig8eH5UaSGCgHMBCWKzElit0eFbECFRHogeUE2vwqi5s+lqgsZUaRhFWRzBo3KqLGyB2+cYQWtfq94/goqQfrOlvQIjTCRjCC9rlkTygYUBlAZVsLXhAi8ojyjXYUdFjHoLNWyCQOyBFoKWIujBVsQMXolpSJiI7K2qJjIS0oiCFShlVKPUVCk2yEdFSljZT5UKWCc7Buw8oU1R1GAAFCmlk48qStLWy5USkxIoUYfugkc4B7FLKV6kQtao8ysNkHYVEg/dBYJEEw/KCWpWw9fqgepUIkFLEHAJYrc3CtisnCtiOpLQ9SWGHlUTbKR3UF0c++5Qao5891kaGzDysqmJd+qItMvutHqiqeZ6qpRGRGXnGzBZdExI0oDUEQa0UxIqi0SbIqQdsgvp6aoqiRTRSSY6lrcrOe3DD80xDvp4Xdu/28Zle+13GMZkt1a31NO/5LUZ4z1v5wmXDbsZqcJ+F/wBlLaape/liCYv7METtX4LUdfByzwywi8omPbFf3ZZNiQ7I+KTEwkRMqid0KlHKAyU6LQyjNDUi0NSFLY5CO6FNTJD5WRY2REXczbr3RaR1oyOYg85qWWhq9UEtZ7FAcw90DEmFRMTIr3vAVhsNZQOut/r/AHWufGyib9Z5DfrHG+N9um4WspqJpvDC6z8ol6OjbDGxlPbaeJrH+6JJhlx9QOjf1+K+Pjwc5zeybn6+unzfZ2drTFRriIiPLy/mXoor7eoTyOfTva0AZdD6ehXvz/0op87Xs1bpnKcKn9Jldb+JpZZpBO2nc+J2HNhY5rtxnOok/gsd5jH4paymJvHGJ8vGb+VOTWU8NbUyS1VE0vkeXExyBoH3Fp/mvlbMZzynZhl+38vqa+PnVjjhEeHr1/eFc3DFucwONHIA4ZB0sd8l1w4fiJi4z+f+Fy7U13WWvH4f+ua7hWzyEjkPHqYG/s5cdnEcRqnrnLpjv4bZ/wAOP17mafg2zBwBeW5G2I3hXTx+/ZF45X7k248FjNZ6q96iTgK28rmR1LmszgOJeB+oXo+2cTHlHwcY19m5f0zHvYpOAqUn6O5jfsZG/u0LUcfv88I+bM8H2fl4ZZR8P4UO4Ak/6Vwhd8XsP/stT2llHjh8/wCT7t4TL8u2fgj/ALvrp1ieyT+EZ/kSrHaePnjPxj+WJ7J1+W6PfFE7gi9Rj/l3H/scP2XSO0dc+U/Bznsmf6dmM+9nl4XvEJw+lIPgnH81r7w0eczHthj7o3z1xmJ9ksFRBLTNLJmFjj7wz3bnqvTjsxzi8ZeXdw+WnpnFMrnYcd+6280x1HMRlwg8eFm2jyED7JYSBoNstrr4KSKrno546WbaOZ7CGP8AgU5nTHXciagqqZkUk8E8LJW6onPYWh48tJ6qczp3EVUS7HCNuhud1FNcrxNbabludzebjcdAMnGVMpnpyt4aMKmcp+Ex6+9p4l9pp79VU9juFXUU9NGCZYKiR7SA0an/AFjgZ+4Kx1jrCZ6cca5J6U61RT8Snh+zzWWSuqZauAzTmBusk5wA78FynLCMuXKHKMZ6zbiVd34qtdUKe4TVcE+kP5crG50noenorjhpyjpBE7Jaab+kDiKMxtdVxuja4ZD4Wnbuu2MREVixlc9ZIcdX0Y1zQvx0zEvPu4TVt/NDrr3bMPB0bTxRcb7XxW+oZA0SaiXxMIdsM+fRefXwOnhsJ5GtvEbNs3k58PHVc7dtLSuIH9jVt+q7zw+HhMufPLQOP6wNLHW+AgnORKQT+ifZY8LTvJTHHuo/SWiMe7/YqO/ndqfZY9V7yU4uKJm2ttfU00b/AKflBrMNGcZB3ys/Z4nKoWNkx4KXcc1Li9zKOBrz3DzkfDGEy4LXlN5RfuhrHic4nrM17WWTjO9uP0VdLC3xG9w/dajhdXhSd/scyouNRWOa+rmfM5jQxpec6Wgk4HpuV15YxieVJ2TlN5M8sjDOcu0s1dfAytYzMYs5VlsmvBqvdPTUFe6npKr2lgG78Y3yRj8A0/es68sso/HFLuwwxn8E285g9gtMUAqLNLA3d7g7sCzb8cqT0dIwwqbnr7P3RyeyOTv3Hh6otFntF5qpWS09e4FsbAdQAwe/kLVVMI+uVF8prjw5TUtwgZyo2NcYhggEDYBbmqSI6053Htxju1ggpqmEMdG0GM4HukDsmzGK8Gtc1PR5ug/ouvlTSwVcdTbXQzRiUDnO1NG3UafVeeJ9HWc4ial7Lh+x8RcPtNvonWqPUA5zGTe/ID3OW5TvYjpKzqyyx54uvk33G43GxUtvbmmpHyP5UrGEENzkjAXPLXjtyif0cNmzucMsvGYnH5z1+TxfEnC9ZfL3PW1tza8NAYeTCZJMAag3Gwzgk5BIVwwx1fgn2vRlsnOLxh2bfNV2Oz01PVcKUVT7M3S6WQODn4IGTmPyfPYrp3WEz+b5f5d547dMVF+6ejxtfwneKmpq6yKnpo4Xyl+ls40sDjsN8fyXm2cVqwmuvwdI157s7jxlt4Mstys/GlnNfC1jagv0EPBBGg7pjtx3YzjF+9w36steN5U9U7iS+3jhisipG2uIRwBskPKLfcc09DqO+2MY3Kxq15TlMeER19vVy25a8cuSJuZiJfHGwS6BsB2wSF7u8x8IY5V1Nb6yqkDKaAyvyBpZucnorzRPQjXlMXEdHueC62G3cNTiutVNXFt45XJrG+6w8lxJ6dfdI38lefdjM/iieq68YnOMcpqPVi/pKbNJJbqsWu30NLJETD7ABiQHScuAA6dFdETOHPM+PVzjZhnETi8QJNsrvarGye6VmVhW55wVYmmZhpuNZJV1Rne97nPa3Lnnc4GP2S58285wnK8XP3Roqdxjqo5CwPDJA4td0dg9CrEsTD2Tb/RMhqdNkoi6UOEfQ6AWyAdR1+kH/iFqc4mJinLu55ua3laagnqARFE4lo3BK5czpUvoHFXMqOEeHaCnayaaGKKOVjCHOjwGknA/hwt57MekJjryWUv9ZmCOP2UOAHUtOfxyvDPEbebpHR+p08J2Z3WOee38VfOvYuuNPXSQhzbZU1JYHDTMA7c9MaSOnyXq27884h8fhtfC4zljljUV0r1+rZpbzxVaqWJlMKpj2xjTy6YHQBhoH1d9gOvhYwxwmbl5dn5a9XbsF1vlVNTVN5lrxtIXlrOWds6R7u/Xz5XDdly5zEPu8Lhw/wB3RXLz/rV+NefSOnnDnXoXWos9iqWR1TZ5JnvnbqLnNBczZx6+eq9V1PufnsMccprLzmPh5u7aa+aO9xc3L2zOBmkmgxv065I6Lwbtu6qqr86fpNvZ/Z+vTlnhlHNF1+K/2e7qyytptBw9hDicHIcc5+/o1axmYp8OsJePjtF1h9pf7NI1zpHAMp4mPM0Z6Akg4x9y4xpnOZnPr6fUvs7OI4XvtXdTUdLnrHWPYpoLfdJ75w9Pc6W4a6V82tzwDGwEDT06dOmF21zlHRz7Uz4SeaNGUVNVXr535+zq59htV5pGVMdRS1ccEzGte0R51AZ277brc57I8IePhdHBzOU7Jqfg8xe+FL1LWB9vsbxrbqfFEwMa05PQE7DoroznK+d04/PXr2xjwuV4/Fosdmu1jZJUXGGGglMjHQvnqI2OGOpG+f1Wtk53E63bs/iuHxwyx4ufHw6fUfFqgqLcbRcoH19uZLLdZKmMS1DNRB14OdRydwM7dV1vKIfGz5Zz/S5+qW1F7pIrVDB/WdLLPFG1jczMcIx1OkjfOfXuVxz72fL6+v1fV4fHs6NVZeNf9vHy/R4a6vpZW8+FtKJngiSKKLS1h294HfJP7r0cz5GOufNyQ146tOAtTMSkRkZWWqEo5hBy0e7grc5WxGrLwZ9SjR60E2VMrBhj3N+BwpMRK3K5lxrG/Vqp2/CQhTkx9F58vVMXa4j6twqx8J3fNXu8PSDnlY283Qfadb+Yf81eTD0hOaVjL5dR9p135h/zV5cPQ5lzb/dR9qV35l/zV5cfQtey/wBz/wASq/vnd81ahm1n+0N0H2nWD4VDvmlQKpL9dD1u1cf9U/5pOMejcTEKzf7qPta4fdVyfNYnCPRuM49FbuILt/i9y/NyfNTkj0OePRA367H7VuP5p/zU7uPQ54RN6uZ63OvP+pf807uPQ54USXGskHv1lS7+KZx/dOWF5oUPlc85kcXH/Mcq8pzwWoJRzwNaUnONeVeVO8GpOVO8PUryp3g1Jyp3jPlKZCtASksJS2eUSwHIWkHK1KWetWkt0Ka5QQRtabXSSuHWSTLifudkfgqWvN8I/wCDbbbH6GmDlbLYKmrNRK6RzYmk9oYmxt/BoAULVaiexSjmIk+Eo5kSSlHMW/hKOY9/CUcw97slJzDBKUcw0nwrSWYapRZ6VaLPSlB6f8yqMuFim7GFaLGEQ0Aglg+CiBFMDyiJAA+qBhqtCQDQeioRd4QL4qAwgMIGgEBgqhogQPB7IHv5QGCgyrLQQCBoAIGiGgk1+no1rvQjKosNXJke43bp7oSxD2o53H6JZQ9oz1G3wSwc1h8BULUD0IUDyPIQLPqEDQPKoM+qB5RDygM+qKWUBv5RGdZaGUD2QGUBlAZQNA8DuiANHYqh49CgMD+8UBp8jZAjHnopQXKPlWlR0O7FQM8weqBapPCA5jh1CB84+EsoxM09UtKPmt8q2UYkb5Sykg9v94IKMFRTwgEBhAYQJAZQNA8oAFA8u8oDJ8oAEoJalUAd/wDZQGsoDUO4QIlvhQLbwikQgA0eiAMbfKFloCBoBA8IAhAAIAgIEQgQQMIEgaBgIBECARQFUSwgeBhBFRS6Nx5QJAyiEiv/2Q==',
        },
        {
          name: 'Quick Fill Petrol',
          area: 'Industrial Area',
          distance: 15,
          image: 'https://images.unsplash.com/photo-1621742984448-1ee5a38fb5a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGV0cm9sJTIwcHVtcHxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          name: 'Green Valley Fuel',
          area: 'Residential Zone',
          distance: 7,
          image: 'https://images.unsplash.com/photo-1585740452884-2a29a1d21514?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGV0cm9sJTIwcHVtcHxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          name: 'Metro Gas Station',
          area: 'Shopping Complex',
          distance: 9,
          image: 'https://images.unsplash.com/photo-1557397314-5c1b8b4cde21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBldHJvbCUyMHB1bXB8ZW58MHx8MHx8fDA%3D',
        },
        {
          name: 'Express Petrol Mart',
          area: 'Highway',
          distance: 20,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRPOwyyybe66_nbKbi8FfsMqTnq7IhCipxb94wXcT0vg590UdaTQEfQ4Y1-Q&s',
        },
        {
          name: 'Speedy Fuels',
          area: 'Tourist Spot',
          distance: 25,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1mBUvVZJP43vi5ypDykczaQJy8AqEHdkMNk7u7W51Jrt9u8ZhiI00z7aBgw&s',
        },
      ]);
    

  const [sortOrder, setSortOrder] = useState(1);

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder % 3) + 1);
  };

  const sortByDistance = () => {
    let sortedPumps;
    if (sortOrder === 1) {
      sortedPumps = [...petrolPumps].sort((a, b) => a.distance - b.distance);
    } else if (sortOrder === 2) {
      sortedPumps = [...petrolPumps].sort((a, b) => b.distance - a.distance);
    } else {
      sortedPumps = [...petrolPumps];
    }
    setPetrolPumps(sortedPumps);
    toggleSortOrder();
  };

  return (
    <div className="container mt-4">
      <h2>Petrol Pumps</h2>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-primary" onClick={sortByDistance}>
          Sort by Distance
        </button>
      </div>
      <div className="row">
        {petrolPumps.map((petrolPump, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img src={petrolPump.image} className="card-img-top" alt={petrolPump.name}
               style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{petrolPump.name}</h5>
                <p className="card-text">
                  <strong>Area:</strong> {petrolPump.area}
                  <br />
                  <strong>Distance:</strong> {petrolPump.distance} km
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetrolPumpPage;