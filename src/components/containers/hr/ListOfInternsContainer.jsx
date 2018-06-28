import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 13,
    },
}))(TableCell);

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

function createData(name, language, status, date, comment, attachment) {
    return {name, language, status, date, comment, attachment};
}

const data = [
    createData('Islam Akylbek uulu', 'JavaScript', 'Aктивный', '24/07/18', 'Comments is here...', 'CV'),
    createData('Name surname', 'Python', 'Aктивный', '24/07/18', 'Comments is here...', 'CV'),
    createData('Human human', 'Java', 'Aктивный', '24/07/18', 'Comments is here...', 'CV'),

];

function ListOfCandidatesContainer(props) {
    const {classes} = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <CustomTableCell>№</CustomTableCell>
                        <CustomTableCell>Ф.И.О</CustomTableCell>
                        <CustomTableCell>ЯЗЫК</CustomTableCell>
                        <CustomTableCell>СТАТУС</CustomTableCell>
                        <CustomTableCell>ДАТА</CustomTableCell>
                        <CustomTableCell>КОММЕНТАРИЙ</CustomTableCell>
                        <CustomTableCell>ВЛОЖЕНИЕ</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((n, i) => {
                        return (
                            <TableRow className={classes.row} key={i}>
                                <CustomTableCell> {++i} </CustomTableCell>
                                <CustomTableCell component="th" scope="row">
                                    {n.name}
                                </CustomTableCell>
                                <CustomTableCell>{n.language}</CustomTableCell>
                                <CustomTableCell>{n.status}</CustomTableCell>
                                <CustomTableCell>{n.date}</CustomTableCell>
                                <CustomTableCell>{n.comment}</CustomTableCell>
                                <CustomTableCell>{<a href={n.attachment}>
                                    CV
                                </a>}</CustomTableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

ListOfCandidatesContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListOfCandidatesContainer);