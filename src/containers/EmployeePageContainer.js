import { connect } from 'react-redux';
import { fetchEmployee } from 'store/actions/fetchEmployee';

import { EmployeePage } from 'pages/EmployeePage/EmployeePage';

const mapState = ({ employee }) => ({
  employee: employee.employee,
  isLoading: employee.isFetching,
});

const mapDispatch = {
  fetchEmployee,
};

export const EmployeePageContainer = connect(
  mapState,
  mapDispatch,
)(EmployeePage);