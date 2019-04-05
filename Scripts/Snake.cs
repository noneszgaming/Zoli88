using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Snake : MonoBehaviour
{
    private Vector2Int gridMoveDricetion;
    private Vector2Int gridPosition;
    private float gridMoveTimer;
    private float gridMoveTimerMax;
    private void Awake()
    {
        gridPosition = new Vector2Int(10, 10);
        gridMoveTimerMax = 1f;
        gridMoveTimer = gridMoveTimerMax;
        gridMoveDricetion = new Vector2Int(1, 0);
    }
    private void Update()
    {
        Movement();
        GridMovement();
    }
    private void Movement ()
    {
        if (Input.GetKeyDown(KeyCode.UpArrow))
        {
            if (gridMoveDricetion.y != -1)
            {
                gridMoveDricetion.x = 0;
                gridMoveDricetion.y = 1;
            }
        }
        if (Input.GetKeyDown(KeyCode.DownArrow))
        {
            if (gridMoveDricetion.y != +1)
            {
                gridMoveDricetion.x = 0;
                gridMoveDricetion.y = -1;
            }
        }

        if (Input.GetKeyDown(KeyCode.RightArrow))
        {
            if (gridMoveDricetion.x != -1)
            {
                gridMoveDricetion.y = 0;
                gridMoveDricetion.x = 1;
            }
        }

        if (Input.GetKeyDown(KeyCode.LeftArrow))
        {
            if (gridMoveDricetion.x != +1)
            {
                gridMoveDricetion.y = 0;
                gridMoveDricetion.x = -1;
            }
        }
        transform.position = new Vector3(gridPosition.x, gridPosition.y);

    }
    private void GridMovement()
    {
        gridMoveTimer += Time.deltaTime;
        if (gridMoveTimer >= gridMoveTimerMax)
        {
            gridPosition += gridMoveDricetion;
            gridMoveTimer -= gridMoveTimerMax;
        }

    }
}
    

