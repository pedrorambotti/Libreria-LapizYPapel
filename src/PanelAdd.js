import React from "react";

class PanelAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      Image: "",
      rating: "",
    };
  }
  onChangeTitle = (e) => {
    this.setState({ title: e.target.value });
  };
  onChangeImage = (e) => {
    this.setState({ image: e.target.value });
  };
  onChangeRating = (e) => {
    const rating = parseInt(e.target.value);

    this.setState({ rating: e.target.value });
  };
  onSumbit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="new-item-panel-container">
        <div className="new-item-panel">
          <form onSumbit={this.onSumbit}>
            <p>
              <label>Titulo del libro</label>
              <br />
              <input
                onChange={this.onChangeTitle}
                type="text"
                name="title"
                className="input"
              />
            </p>
            <p>
              <label>Nombre de imagen</label>
              <br />
              <input
                onChange={this.onChangeImage}
                type="text"
                name="image"
                className="input"
              />
            </p>

            <p>
              <label>Calificacion</label>
              <br />
              <select onChange={this.onChangeRating}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </p>
            <input
              type="sumbit"
              className="butoton btn-blue"
              value="registrar libro"
            />
            <button onClick={this.props.oncancel} className="button btn-normal">
              Cancelar
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default PanelAdd;
