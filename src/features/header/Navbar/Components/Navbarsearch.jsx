import Searchinput from './Searchinput';
import Button from '../../../../ui/Button';

function Navbarsearch() {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button">
        <Button type="secondarySquare">
          <i className="fas fa-search"></i>
        </Button>
      </div>
      <div
        tabIndex={0}
        className="card dropdown-content card-compact right-0 top-10 z-[1] w-60 rounded bg-sky-50 p-2 text-primary-content shadow"
      >
        <div className="card-body flex-row bg-sky-50">
          <Searchinput />
        </div>
      </div>
    </div>
  );
}

export default Navbarsearch;
