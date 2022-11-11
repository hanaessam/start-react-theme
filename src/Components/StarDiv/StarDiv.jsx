import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './star.css';

export default function StarDiv() {
  return (
    <div className="star-icon">
      <i className="fa-solid fa-star fa-2xl my-4 "></i>
    </div>
  );
}

export function DarkStarDiv(){
  return (
    <div className="star-icon dark-star-icon">
      <i className="fa-solid fa-star fa-2xl my-4 "></i>
    </div>
  );
}